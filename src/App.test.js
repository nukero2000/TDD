import { render, screen } from '@testing-library/react';
import App from './App';
import Tree from "./Entity/Tree";
import Leaf from "./Entity/Leaf";
//TEST 1
it('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
//TEST 2
it('Create tree',() => {
    const tree= new Tree();
    expect(tree.leafs.length).toBe(0)
})
//TEST 3
it('Create one leaf ',()=>{
    const leaf = new Leaf();
    expect(leaf).toBeDefined();
})
//TEST 4
it('Create leaf for root node on tree', ()=>{
    const leafData = {
        ID:0,
        ParentNode:null
    }
    const leaf = new Leaf(leafData);
    expect(leaf).toMatchObject(leafData)
})

