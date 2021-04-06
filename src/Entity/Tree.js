import Leaf from "./Leaf";

class Tree {
    constructor() {
        const rootLeafData = {
            ID:0,
            ParentNode:null
        }
        const leaf=new Leaf(rootLeafData);
        this.leafs=[leaf];
        this._selectedLeafs= new Set()
        this.leafLCA = false;
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
    getLeaf = (index) =>{
        return this.leafs[index]
    }
    selectLeaf = (leaf) => {
        leaf = typeof leaf === 'number' ? this.getLeaf(leaf):leaf;
        leaf.select=1;
        this._selectedLeafs.add(leaf)
        this.calculateLCA();
        return leaf;
    }
    unselectLeaf = (leaf) => {
        leaf = typeof leaf === 'number' ? this.getLeaf(leaf):leaf;
        leaf.select=false;
        this._selectedLeafs.delete(leaf);
        this.calculateLCA()
        return leaf;
    }
    isLeafSelected = (leaf) => {
        leaf = typeof leaf === 'number' ? this.getLeaf(leaf):leaf;
        return leaf.isSelected && this._selectedLeafs.has(leaf);
    }

    get numberOfSelectedLeafs(){
        return this._selectedLeafs.size;
    }

    pathToRoot = (leaf) =>{
        let path = new Set();
        while (!!leaf.parent){
            path.add(leaf);
            leaf=leaf.parent
        }
        path.add(leaf);
        return path;
    }
    calculateLCA = () => {
        if (this.LCA) this.LCA.isLCA=false;
        if (this.numberOfSelectedLeafs<2) {
            return this.LCA=false;
        }
        let intersection=false;
        for(let leaf of this._selectedLeafs){
            let path=this.pathToRoot(leaf);
            if (!intersection) intersection=path;
            else intersection= [...intersection].filter(x => path.has(x));
        }
        this.LCA=intersection.values().next().value;
        this.LCA.isLCA=true;
        return this.LCA
    }
    get LCA() {
       return this.leafLCA;
    }
    set LCA(leaf) {
        this.leafLCA = leaf;
    }

}
export  default Tree