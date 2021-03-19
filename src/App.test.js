import { render, screen } from '@testing-library/react';
import App from './App';
import Tree from "./Entity/Tree";
import Leaf from "./Entity/Leaf";
//TEST 1
it('Test 1: renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
//TEST 2
it('Test 2: Create tree',() => {
    const tree= new Tree();
    expect(tree.leafs.length).toBe(1)
})
//TEST 3
it('Test 3: Create one leaf ',()=>{
    const leaf = new Leaf();
    expect(leaf).toBeDefined();
})
//TEST 4
it('Test 4: Create leaf for root node on tree', ()=>{
    const leafData = {
        ID:0,
        ParentNode:null
    }
    const leaf = new Leaf(leafData);
    expect(leaf).toMatchObject(leafData)
})
//TEST 5
it('Test 5: Add root leaf to Tree', ()=>{
    const tree= new Tree();
    const leafData = {
        ID:0,
        ParentNode:null
    }
    expect(tree.getRoot()).toMatchObject(leafData)
})
//TEST 6
it('Test 6: Grow branch from leaf',()=>{
    const leaf1Data = {
        ID:1,
        ParentNode:null
    }
    const leaf1 = new Leaf(leaf1Data);
    const leaf2 = leaf1.growBranch(2)

    expect(leaf2.ParentNode.ID).toBe(1);
    expect(leaf1.branches).toContainEqual(leaf2);
})
// TEST 7
it('Test 7: Grow branches from tree leaf', () => {
    const tree= new Tree();
    tree.growBranches(tree.getRoot(),3);
    expect(tree.countLeafs).toBe(4);
})
// TEST 8
it('Test 8: Grow a custom binary tree on 3 level', () => {
    const tree = new Tree();
    tree.growBranches(tree.getRoot(),2)
    let branch;
    for(branch of tree.getRoot().branches){
        tree.growBranches(branch,2)
    }
    expect(tree.countLeafs).toBe(7);
})
//TEST 9
it('Test 9: Grow random tree with n leafs', ()=>{
    const tree = new Tree();
    tree.grow(10,3);
    expect(tree.countLeafs).toBe(10);
})

