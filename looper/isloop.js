"use strict";

//Complete this algo
const isLoop = linkedlist => {
  let visited = [];
  let currentNode = linkedlist.head;

  if (currentNode.next === null) return false;
  else {
    while (currentNode.next) {
      if (visited.includes(currentNode)) {
        return true;
      } else {
        visited.push(currentNode);
        currentNode = currentNode.next;
      }
    }
  }
  return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
