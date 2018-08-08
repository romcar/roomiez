/* esling  */
import React from 'react';
import { configure, shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';
import UserCard from '../UserCard';
// import the component

configure({ adapter: new Adapter() });
describe('<UserCard/>', () => {
	it('Should render correctly', () => {
		const component = shallow(<UserCard />); // render with no attributes

		expect(toJSON(component)).toMatchSnapshot(); // 1st time is always right
	});

	it("Should display the user's name", () => {
		const component = shallow(<UserCard />);
		expect(component.find('.user-name').length).toEqual(1);
	});

	it("Should display the user's chill level", () => {
		const component = shallow(<UserCard />);
		expect(component.find('.chill-lvl').length).toEqual(1);
	});

	it('Should have somewhere to put the number of questions answered', () => {
		const component = shallow(<UserCard />);
		expect(component.find('.questions-answered').length).toEqual(1);
	});

	it('Should have somewhere to place a isMoving switch', () => {
		const component = shallow(<UserCard />);
		expect(component.find('.isMoving').length).toEqual(1);
	});
});
