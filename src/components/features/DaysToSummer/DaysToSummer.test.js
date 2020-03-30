import React from 'react';
import { shallow } from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  title: 'h3.title',
  number: 'span.number',
  days: 'span.days',
  description: 'span.description',
};

const mockProps = {
  days: {
    one: 'day',
    many: 'days',
  },
  description: 'to summer!',
};

describe('Component DaysToSummer', () => {
  it('should be render without crash', () => {
    const component = shallow(<DaysToSummer {...mockProps}/>);
    expect(component).toBeTruthy;
  });
  it('should render h3.title and 3 span', ()=> {
    const component = shallow(<DaysToSummer {...mockProps}/>);
    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.description)).toEqual(true);
    expect(component.exists(select.days)).toEqual(true);
    expect(component.exists(select.number)).toEqual(true);
  });
  it('should render description correctly', ()=> {
    const component = shallow(<DaysToSummer {...mockProps}/>);
    expect(component.find(select.description).text()).toEqual(' ' + mockProps.description);
  });
});

const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};
const checkIsRenderNull = (testDate) => {
  it(`should render Null`, () => {
    global.Date = mockDate(`${testDate}`);
    const component = shallow(<DaysToSummer {...mockProps} />);
    console.log(component.debug());
    expect(component.exists('.component')).toEqual(false);
    global.Date = trueDate;
  });
};
const checkNumberOfDayAtDate = (testDate, expectedNumberOfDay) => {
  it(`should show correct at ${testDate}`, () => {
    global.Date = mockDate(`${testDate}`);
    const component = shallow(<DaysToSummer {...mockProps} />);
    const renderedNumberOfDay = component.find(select.number).text();
    expect(renderedNumberOfDay).toEqual(expectedNumberOfDay);

    global.Date = trueDate;
  });
};
const startSummer = '2020-06-21T00:00:00.000Z';
const endSummer = '2020-09-23T23:59:59.999Z';
describe('Component DaysToSummer with mocked Date', () => {
  checkIsRenderNull(startSummer);
  checkIsRenderNull(endSummer);
  checkNumberOfDayAtDate('2020-06-20T23:59:59.999Z', '1');
  checkNumberOfDayAtDate('2020-09-24T00:00:00.000Z', '270');
});