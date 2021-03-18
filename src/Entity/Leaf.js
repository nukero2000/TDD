class Leaf {
    constructor(leafData) {
        //pt testul 4  am distrus obiectul in lista de parametrii dar a picat test 3
        if (!!leafData){
           const  {ID,ParentNode}=leafData;
            this.ID=ID;
            this.ParentNode=ParentNode
        }
    }
}

export default Leaf;