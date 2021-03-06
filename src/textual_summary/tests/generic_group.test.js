import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import GenericGroup from '../generic_group';
import GenericTableRow from '../generic_table_row';
import { genericGroupData } from '../data/generic_group';

describe('GenericGroup', () => {
  it('renders title and rows', () => {
    const wrapper = shallow(<GenericGroup items={genericGroupData.items} title={genericGroupData.title} onClick={e => null} />);
    expect(wrapper.html()).toContain(genericGroupData.title);
    expect(wrapper.find(GenericTableRow)).toHaveLength(2);
  });

  it('renders just fine', () => {
    const component = renderer.create(<GenericGroup items={genericGroupData.items} title={genericGroupData.title} onClick={e => null} />);
    const group = component.toJSON();
    expect(group).toMatchSnapshot();
  });
});
