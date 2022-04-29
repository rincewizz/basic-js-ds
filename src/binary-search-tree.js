const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.rootNode=null;
  }
  
  root() {
    return this.rootNode;
  }

  _addToNode(node, data){
    if(!node){
      return new Node(data);
    }
    if(node.data<data){
      node.right=this._addToNode(node.right,data)
    }else if(node.data>data){
      node.left=this._addToNode(node.left,data)
    }

    return node;

  }
  add(data) {
    this.rootNode = this._addToNode(this.rootNode, data);
  }

  has(data) {
    return this.find(data) ? true: false;
  }

  find(data, node=this.rootNode) {
    if(!node){
      return null;
    }
    if(node.data==data){
      return node;
    }
    if(node.data<data){
      return this.find(data, node.right);
    }else{
      return this.find(data, node.left)
    }
    
  }

  remove(data, node= this.rootNode) {
    if(!node){
      return null;
    }

    if(node.data < data ){
      node.right = this.remove(data, node.right);
      return node;
    }else if(node.data > data){
      node.left = this.remove(data, node.left);
      return node;
    }else{

      if(!node.left && !node.right){
        return null;
      }

      if(!node.left){
        return node.right;
      }
      if(!node.right){
        return node.left;
      }

      let minRight = node.right;
      while (minRight.left) {
        minRight = minRight.left;
      }
      node.data = minRight.data;

      node.right = this.remove(minRight.data, node.right);

      return node;      
    }
  }

  min() {
    
    function getLeft(node){
      if(node.left){
        return getLeft(node.left);
      }
      return node.data;
    }
    return getLeft(this.rootNode);

  }

  max() {

    function getRight(node){
      if(node.right){
        return getRight(node.right);
      }
      return node.data;
    }
    return getRight(this.rootNode);

  }
}

module.exports = {
  BinarySearchTree
};