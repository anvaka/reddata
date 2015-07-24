/**
 * This file will dump recommendations for all subreddits to disk
 */
var limit = 100;
var outFolder = 'data';
var cutLimit = 15;
var redisClient = require('./lib/redisClient.js')();
redisClient.forEachSub(printIt);
var graph = require('ngraph.graph')();
var tojson = require('ngraph.tojson');
var path = require('path');
var fs = require('fs');
var processedCount = 0;

function printIt(sub) {
  processedCount += 1;
  console.log(processedCount, 'Building recomendations for ' + sub);
  graph.addNode(sub);

  return redisClient.getRelated(sub).then(print);

  function print(subs) {
    console.log('Found subs related to ' + sub);
    // first sub is always self:
    var subsWithoutSelf = subs.slice(1, limit + 1);
    var cutPoint = getCutPoint(subsWithoutSelf);

    for (var i = 0; i < cutPoint; ++i) {
      graph.addLink(sub, subsWithoutSelf[i].name, sim(subsWithoutSelf[i]));
    }

    var saveTo = path.join(outFolder, sub + '.json');
    console.log('Saving first ' + limit + ' related subreddits to ' + saveTo);
    fs.writeFileSync(saveTo, JSON.stringify(subsWithoutSelf.map(toShort)));
  }

  function toShort(record) {
    return {
      n: record.name,
      s: sim(record)
    };
  }
}

process.on('SIGINT', function() {
  var saveTo = path.join(outFolder, 'recommended.ngraph');
  fs.writeFileSync(saveTo, tojson(graph));
  console.log('Graph saved to ' + saveTo);
  console.log('Edges: ' + graph.getLinksCount());
  console.log('Nodes: ' + graph.getNodesCount());

  process.exit(0);
});


function getCutPoint(subs) {
  var max = Math.min(subs.length, cutLimit);
  var lastSpikeIndex = 0;
  for (var i = 1; i < max; ++i) {
    var diff = subs[i].sim/subs[i-1].sim;
    if (diff < 0.92) {
      lastSpikeIndex = i;
    }
  }
  return lastSpikeIndex;
}

function sim(record) {
  return (record.sim * 100).toFixed(2);
}
