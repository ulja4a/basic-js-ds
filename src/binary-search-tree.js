const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.main = null;
  }
  root() {
    return this.main;
  }

  add(data) {
    this.main = addElement(this.main, data);

    function addElement(node, data) {
      if(!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data< node.data) {
        node.left = addElement(node.left, data); 
      } else {
        node.right = addElement(node.right, data);
      }
      return node;
    }

  }

  has(data) {
    return hasElement(this.main, data);
    function hasElement(node, data) {
      if (!node) {
        return false;
      }
      if (node.data===data) {
        return true;
      } 
      if (data<node.data) {
        return hasElement(node.left, data);
      } else {
      return hasElement(node.right, data);
      }
    }
    
  }

  find(data) {
    return findElement(this.main, data);
    function findElement(node, data) {
      if (!node) {
        return null;
      }
      if (data===node.data) {
        return node;
      }
      if (data<node.data) {
        return findElement(node.left, data);
      } else {
      return findElement(node.right, data);
      }
    }
  }

  remove(data) {
    this.main = removeElement(this.main, data);
    function removeElement(node, data) {
      if (!node) {
        return null;
      }
      if (data<node.data) {
        node.left = removeElement(node.left, data);
        return node;
      } else if (node.data< data) {
        node.right = removeElement(node.right, data);
        return node;
      } else {
        if (!node.left&&!node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let maxFromLeft = node.left;
        while(maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right;
        }
        node.data = maxFromLeft.data;
        node.left = removeElement(node.left, maxFromLeft.data);
        return node;
      }
      
    }
  }

  min() {

    if (!this.main) {
      return null;
    }
    let node=this.main;
    while (node.left) {
      node=node.left;
    }
    return node.data;
  }

  max() {
    if (!this.main) {
      return null;
    }
    let node=this.main;
    while (node.right) {
      node=node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};