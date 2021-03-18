import Leaf from "./Leaf";

class Tree {
    constructor() {
        const rootLeafData = {
            ID:0,
            ParentNode:null
        }
        const leaf=new Leaf(rootLeafData);
        this.leafs=[leaf];
    }
    getRoot = () => {
        return this.leafs[0]
    }
    countLeafs = () => {
        return this.leafs.length;
    }
    growBranches = (leaf,nrOfBranches) => {
        for (let i = 0;i<nrOfBranches;i++){
           let newLeaf= leaf.growBranch(this.countLeafs())
           this.leafs.push(newLeaf);
        }
    }

}
export  default Tree