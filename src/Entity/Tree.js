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
    get countLeafs(){
        return this.leafs.length;
    }
    growBranches = (leaf,nrOfBranches) => {
        for (let i = 0;i<nrOfBranches;i++){
           let newLeaf= leaf.growBranch(this.countLeafs)
           this.leafs.push(newLeaf);
        }
    }
    randomNumber = (min, max) => {
        return Math.floor(Math.random()*(max-min+1)+min)
    }
    grow = (leafsNumber,maxLeafsPerBranch,level,nextLevel) => {
        if (this.countLeafs>=leafsNumber) return;

        nextLevel = typeof nextLevel === 'undefined' ? []:nextLevel
        level = Array.isArray(level) ? level : [this.getRoot()];
        maxLeafsPerBranch = maxLeafsPerBranch < leafsNumber-this.countLeafs?
               maxLeafsPerBranch:leafsNumber-this.countLeafs;

        let randomLeafNumber = this.randomNumber(0,level.length-1);
        let leaf = level[randomLeafNumber];
        level.splice(randomLeafNumber, 1)
        this.growBranches(leaf,this.randomNumber(1,maxLeafsPerBranch));
        nextLevel=nextLevel.concat(leaf.branches);
        if (this.countLeafs<leafsNumber) {
            if (level.length===0){
                level=nextLevel;
                nextLevel=[];
            }
        this.grow(leafsNumber,maxLeafsPerBranch,level,nextLevel)
       }

    }

}
export  default Tree