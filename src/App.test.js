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
//TEST 10
it('TEST 10: random number test',()=>{
     const min = 1;
     let max = 1
     const tree = new Tree();
     expect(tree.randomNumber(min,max)).toBe(1);
     max=10;
    expect(tree.randomNumber(min,max)).toBeGreaterThanOrEqual(min);
    expect(tree.randomNumber(min,max)).toBeLessThanOrEqual(max);

})
//TEST 11:
it('Test 11: Grow random tree test branches per leaf', ()=>{
    const tree = new Tree();
    const leafsNumber = tree.randomNumber(10,100);
    const maxBranchesPerLeaf = tree.randomNumber(3,8)
    tree.grow(leafsNumber,maxBranchesPerLeaf);
    expect(tree.countLeafs).toBe(leafsNumber);
    for(let leaf of tree.leafs){
        expect(leaf.branches.length).toBeLessThanOrEqual(maxBranchesPerLeaf);
    }
})

//TEST 12:
it('TEST 12: Selecting 2 distinct nodes',()=>{
    let tree = new Tree()
    tree.grow(10,3);
    let selectedLeaf=tree.selectLeaf(5);
    expect(selectedLeaf).toBeInstanceOf(Leaf);
    expect(selectedLeaf).toBe(tree.getLeaf(5));
    expect(tree.numberOfSelectedLeafs).toBe(1);
    selectedLeaf=tree.selectLeaf(5);
    expect(selectedLeaf).toBeInstanceOf(Leaf);
    expect(tree.numberOfSelectedLeafs).toBe(1);
    selectedLeaf=tree.selectLeaf(6);
    expect(selectedLeaf).toBeInstanceOf(Leaf);
    expect(tree.numberOfSelectedLeafs).toBe(2);

})

//TEST 13:
it('TEST 13: unSelecting 1 leaf',()=>{
    let tree = new Tree()
    tree.grow(10,3);
    let selectedLeaf=tree.selectLeaf(5);

    tree.selectLeaf(6);
    let unselectedLeaf=tree.unselectLeaf(tree.getLeaf(5));
    expect(tree.getLeaf(5)).toBe(unselectedLeaf);
    expect(unselectedLeaf).toBe(selectedLeaf);
    expect(tree.numberOfSelectedLeafs).toBe(1);
    expect(tree.isLeafSelected(tree.getLeaf(6))).toBe(true);

})
// TEST 14
it('Test 14: Path to root', () => {
    const tree = new Tree();
    tree.growBranches(tree.getRoot(),2)
    let branch;
    for(branch of tree.getRoot().branches){
        tree.growBranches(branch,2)
    }
    expect(tree.pathToRoot(tree.getLeaf(4)).size).toBe(3);
})
