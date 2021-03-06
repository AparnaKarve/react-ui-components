import React from 'react';
import CategoryModifier from '../components/categoryModifier';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

const selectedTagCategory = { description: 'animal', id: 1};
const onTagCategoryChange = jest.fn();
const tagCategories = [
  { description: 'Name', id: 1 },
  { description: 'Number', id: 2 },
  { description: 'Animal', id: 3 },
  { description: 'Food', id: 4 },
];

describe('TagCategory Component', () => {
  it('match snapshot', () => {
    const component = renderer.create(<CategoryModifier
      selectedTagCategory={selectedTagCategory}
      onTagCategoryChange={onTagCategoryChange}
      tagCategories={tagCategories}
    />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
