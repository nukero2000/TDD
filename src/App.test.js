import { render, screen } from '@testing-library/react';
import App from './App';
import Tree from "./Entity/Tree";

it('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it('Create tree',() => {
    const tree= new Tree();
    expect(tree.leafs.length).toBe(0)
})
