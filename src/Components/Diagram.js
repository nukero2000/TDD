import React, { Component } from 'react';
import fromCDN from "from-cdn";
import Tree from "../Entity/Tree";


class Diagram extends Component {
  constructor(props) {
    super(props);

    this.container = React.createRef();
    this.ready = fromCDN([
      "//localhost:3000/codebase/diagram.js",
      "//localhost:3000/codebase/diagram.css"
    ]);
    this.state = {
      'diagram':{},
      'tree':!!props.tree?props.tree:new Tree()
    }
    if (!!props.leafs && !!props.maxChildrenNodes)
        this.state.tree.grow(props.leafs,props.maxChildrenNodes);
    let randomLeaf=this.state.tree.randomNumber(1,props.leafs)
    this.state.tree.selectLeaf(randomLeaf);
    randomLeaf=this.state.tree.randomNumber(1,props.leafs)
    this.state.tree.selectLeaf(randomLeaf);
  }

  afterClick (id)  {
    const tree =  this.appTreeData;
    const index = id-1;

    if (tree.isLeafSelected(tree.getLeaf(index))) tree.unselectLeaf(index);
    else tree.selectLeaf(index);
    this.data.parse(this.generateViewData());
  }
  mapLeafToDiagram = (leaf) =>{
    let leafData={
      "id": leaf.ID+1,
      "text": (leaf.ID+1).toString(),
      "title": leaf.ID+1,
      "width":50,
      "height":50
    }
    if (!!leaf.ParentNode) leafData.parent=leaf.ParentNode.ID+1

    if (leaf.isLCA) {
      leafData.css='lcaLeaf';
      leafData.fill='#e24312';
      leafData.stroke='#000000'
      leafData.fontColor='#fff'
      console.log('LCA:',leaf);
      return leafData;
    }
    if (!!leaf.isSelected) {
      leafData.css='selectedLeaf';
      leafData.fill='#75C1E5';
      leafData.stroke='#000000';
    }

    return leafData
  }
  componentDidMount() {
    this.ready.then(_ => {
      /* globals dhx */

      this.setState({
        'diagram':new dhx.Diagram(this.container.current,
            {type:"org","select":true,"defaultShapeType":"circle"})
      });
      let diag = this.state.diagram;
      diag.appTreeData=this.state.tree;
      diag.mapLeafToDiagram = this.mapLeafToDiagram;
      diag.generateViewData = function (){
        return  this.appTreeData.leafs.map(leaf => this.mapLeafToDiagram(leaf));
      }


      diag.data.parse(diag.generateViewData());
      diag.events.on("ShapeClick", this.afterClick);

      this.setState({
        'diagram':diag
      })

    });
  }
  render() {
    return (
      <div ref={this.container} className="tree-box" />
    );
  }
}

export default Diagram;
