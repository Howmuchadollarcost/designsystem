import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import SortableTable from './SortableTable';

describe('<SortableTable>', () => {

  const headers = [
    {content: 'Name', key: 'name'},
    {content: 'Age', key: 'age'},
    {content: 'Employee-id', key: 'id'}
  ];

  const data = [
    { name: 'Zombie Mountain', age: 36, id: 2 },
    { name: 'Daenerys Targaryen', age: 16, id: 4 },
    { name: 'Ned Stark', age: 48, id: 3 },
    { name: 'Jon Snow', age: 20, id: 1 }
  ];

  const wrapper = render(<SortableTable headers={headers} data={data}/>);

  it('should show right amount of th tags', () => {
    expect(wrapper.find('th')).to.have.length(headers.length);
  });

  it('should render a row for each data array entry', () => {
    expect(wrapper.find('tbody tr')).to.have.length(data.length);
  });

  it('should set data-th property on each cell rendered', () => {
    expect(wrapper.find('[data-th]')).to.have.length((data.length * headers.length));
  });

  it('should add `aria-sort` property', () => {
    expect(wrapper.find('[aria-sort]')).to.have.length(headers.length);
    });
});
