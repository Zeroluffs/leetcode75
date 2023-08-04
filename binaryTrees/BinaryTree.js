class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }
  Insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.#InsertNode(this.root, newNode);
    }
  }

  #InsertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (!root.left) {
        root.left = newNode;
      } else {
        this.#InsertNode(root.left, newNode);
      }
    } else {
      if (!root.right) {
        root.right = newNode;
      } else {
        this.#InsertNode(root.right, newNode);
      }
    }
  }
  Preorder(root) {
    if (!root) {
      return null;
    } else {
      console.log(root.value);
      this.Preorder(root.left);
      this.Preorder(root.right);
    }
  }

  Inorder(root) {
    if (!root) {
      return null;
    } else {
      this.Inorder(root.left);
      console.log(root.value);
      this.Inorder(root.right);
    }
  }
  Postorder(root) {
    if (!root) {
      return null;
    } else {
      this.Postorder(root.left);
      this.Postorder(root.right);
      console.log(root.value);
    }
  }
  LevelOrder() {
    let arrayQueue = [];
    arrayQueue.push(this.root);
    while (arrayQueue.length) {
      const current = arrayQueue.shift();
      console.log(current.value);
      if (current.left) {
        arrayQueue.push(current.left);
      }
      if (current.right) {
        arrayQueue.push(current.right);
      }
    }
  }
}

let binaryTree = new BinaryTree();
binaryTree.Insert(4);
binaryTree.Insert(2);
binaryTree.Insert(7);
binaryTree.Insert(1);
binaryTree.Insert(3);
binaryTree.Insert(6);
binaryTree.Insert(9);

binaryTree.LevelOrder(binaryTree.root);
