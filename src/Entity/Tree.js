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

}
export  default Tree