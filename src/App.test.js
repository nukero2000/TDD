import { render, screen } from '@testing-library/react';
import App from './App';
import Tree from "./Entity/Tree";
import Leaf from "./Entity/Leaf";

it('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it('Create tree',() => {
    const tree= new Tree();
    expect(tree.leafs.length).toBe(0)
})

it('Create one leaf ',()=>{
    const leaf = new Leaf();
    expect(leaf).toBeDefined();
})
