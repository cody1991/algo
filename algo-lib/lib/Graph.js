const Queue = require('./Queue');
module.exports = class Graph {
  vertices = [];
  adjList = {};

  addVertice(v) {
    this.vertices.push(v);
    this.adjList[v] = [];
  }

  addEdge(a, b) {
    this.adjList[a].push(b);
    this.adjList[b].push(a);
  }

  print() {
    var s = '\n';

    for (let i = 0; i < this.vertices.length; i++) {
      const vertics = this.vertices[i];
      s += vertics + ' => ';
      const adj = this.adjList[vertics];
      s += adj.join(', ');
      s += '\n';
    }

    console.log(s);
  }

  // white 未发现
  // grey 已发现未探索
  // black 已探索
  initColors() {
    const colors = {};
    return this.vertices.reduce((obj, item) => {
      obj[item] = 'white';
      return obj;
    }, {});
  }
  bfs(v, cb) {
    const distance = this.vertices.reduce((obj, item) => {
      obj[item] = 0;
      return obj;
    }, {});
    const pred = this.vertices.reduce((obj, item) => {
      obj[item] = null;
      return obj;
    }, {});
    console.log('init distance', distance);
    console.log('init pred', pred);
    const colors = this.initColors();
    console.log(colors);

    const queue = new Queue();

    queue.enqueue(v);

    while (!queue.isEmpty) {
      const now = queue.dequeue();

      for (let i = 0; i < this.adjList[now].length; i++) {
        const adj = this.adjList[now][i];

        if (colors[adj] === 'white') {
          colors[adj] = 'grey';
          queue.enqueue(adj);

          pred[adj] = now;
          distance[adj] = distance[now] + 1;
        }
      }

      colors[now] = 'black';

      cb && cb(now);
    }

    console.log('after distance', distance);
    console.log('after pred', pred);

    return {
      distance,
      pred,
    };
  }

  dfsVisited(v, colors, cb) {
    colors[v] = 'grey';
    const adj = this.adjList[v];

    for (let i = 0; i < adj.length; i++) {
      const cur = adj[i];
      if (colors[cur] === 'white') {
        this.dfsVisited(cur, colors, cb);
      }
    }

    colors[v] = 'black';

    cb && cb(v);
  }

  dfs(v, cb) {
    const colors = this.initColors();
    console.log('dfs');
    this.dfsVisited(v, colors, cb);
  }
};
