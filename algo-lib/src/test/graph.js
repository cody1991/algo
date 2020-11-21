const Graph = require('../../lib/Graph');
const Stack = require('../../lib/Stack');

const graph = new Graph();
graph.addVertice('A');
graph.addVertice('B');
graph.addVertice('C');
graph.addVertice('D');
graph.addVertice('E');
graph.addVertice('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('B', 'E');
graph.addEdge('F', 'B');
// graph.addEdge('D', 'F');

const bfs = graph.bfs('A', (val) => console.log(val));

console.log(bfs);

function path(from, to) {
  let v = to;
  const curStack = new Stack();

  while (v !== from) {
    curStack.push(v);
    v = bfs.pred[v];
  }

  curStack.push(v);

  let s = '';
  while (!curStack.isEmpty) {
    s += curStack.pop();
  }
  return s;
}

console.log(path('A', 'F'));

graph.dfs('A', (val) => console.log(val));
