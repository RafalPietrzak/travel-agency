import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render correct link URL and img src and alt ', () => {
    const props = {
      id: 'abc',
      image: 'image.jpg',
      name: 'correct alt',
      tags: [],
    };
    const expectedURL = `/trip/${props.id}`;
    const component = shallow(
      <TripSummary {...props}/>
    );
    console.log(component.debug());
    expect(
      component.find('.link').prop('to')
    ).toEqual(expectedURL);
    expect(
      component.find('img').prop('alt')
    ).toEqual(props.name);
    expect(
      component.find('img').prop('src')
    ).toEqual(props.image);
  });
});