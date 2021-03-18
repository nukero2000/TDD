class Leaf {
    constructor(leafData) {
        //pt testul 4  am distrus obiectul in lista de parametrii dar a picat test 3
        if (!!leafData){
           const  {ID,ParentNode}=leafData;
            this.ID=ID;
            this.ParentNode=ParentNode;
            this.branches = [];
        }
    }
    growBranch = (ID) => {
        const newLeafData={
            ID,
            ParentNode:this
        };
        const  newLeaf = new Leaf(newLeafData);
        this.branches.push(newLeaf);
        return newLeaf;
    }
}

export default Leaf;