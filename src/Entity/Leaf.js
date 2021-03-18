class Leaf {
    constructor(leafData) {
        //pt testul 4  am distrus obiectul in lista de parametrii dar a picat test 3
        if (!!leafData){
           const  {ID,ParentNode}=leafData;
            this.ID=ID;
            this.ParentNode=ParentNode;
            this._branches = [];
        }
    }
    growBranch = (ID) => {
        const newLeafData={
            ID,
            ParentNode:this
        };
        const  newLeaf = new Leaf(newLeafData);
        this.conectedLeaf = newLeaf;
        return newLeaf;
    }
    //refectoring -- adding getter and setters
    get branches() {
        return this._branches
    }
    set conectedLeaf(newLeaf) {
        this._branches.push(newLeaf);
    }
}

export default Leaf;