import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  const props = {
    id: 'abc',
    image: 'image.jpg',
    name: 'trip name',
    tags: [],
    days: 3,
    cost: '$50 000',
  };
  it('should render correct link URL and img src and alt ', () => {
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
  it('should render correct props name, cost and days', () => {
    const expectedDays = `${props.days} days`;
    const expectedCost = `from ${props.cost}`;
    const component = shallow(
      <TripSummary {...props}/>
    );
    expect(
      component.find('.title').text()
    ).toEqual(props.name);
    expect(
      component.find('.details span').at(0).text()).toEqual(expectedDays);
    expect(
      component.find('.details span').at(1).text()).toEqual(expectedCost);
  });
  Object.keys(props).map(key => {
    it(`should crashing without props ${key}`, ()=>{
      const newProps = {...props};
      delete newProps[key];
      expect(() => shallow(<TripSummary {...newProps}/>)).toThrow();
    });
  });
});