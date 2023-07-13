const numbers = [9,5,4,2,6,3,1,8]

function createTreeNode(newValue) {
    return {value: newValue, less: null, greater: null }
}

function addANodeToTree(newValue, tree){
    const newNode = createTreeNode(newValue)
    if (tree == null)
        return newNode

    if (newValue < tree.value ){
        if (tree.less == null) tree.less = newNode
        else addANodeToTree(newValue, tree.less)
    } else {
        if (tree.greater == null) tree.greater = newNode
        else (addANodeToTree(newValue, tree.more))
    }
    return tree;
}

function createANewTree(values){
    let tree = null
    values.forEach(value => {
        tree = addANodeToTree(value, tree)
    })
    return tree
}

const newTree = createANewTree(numbers)

function writeBinarySearchTree(treeNode){
    if (treeNode.less) writeBinarySearchTree(treeNode.less)
    console.log('<', treeNode.value)
    if (treeNode.greater) writeBinarySearchTree(treeNode.greater)
}

writeBinarySearchTree(newTree)