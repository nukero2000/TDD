import React, { Component } from 'react';
import fromCDN from "from-cdn";


class Diagram extends Component {
  constructor(props) {
    super(props);
    this.tree=props.tree;
    this.container = React.createRef();
    this.ready = fromCDN([
      "//cdn.dhtmlx.com/diagram/2.1/diagram.js",
      "//cdn.dhtmlx.com/diagram/2.1/diagram.css"
    ]);
  }
  generateViewData() {
    let data=[];
    for (let leaf of this.tree.leafs){
      let leafData={
        "id": leaf.ID+1,
        "text": leaf.ID+1,
        "title": leaf.ID+1,
        "width":50,
        "height":50
      }
      if (!!leaf.ParentNode) leafData.parent=leaf.ParentNode.ID+1
      data.push(leafData);
    }
    return data;


  }
  componentDidMount() {
    this.ready.then(_ => {
      /* globals dhx */
      var diagram = new dhx.Diagram(this.container.current,{type:"org"});
      diagram.data.parse(this.generateViewData());
    });
  }
  render() {
    return (
      <div ref={this.container} className="tree-box" />
    );
  }
}

export default Diagram;
