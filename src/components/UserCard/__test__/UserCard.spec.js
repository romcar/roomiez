import { shallow } from 'enzyme';
// import sinon from 'sinon';

describe('<UserCard/>', () => {
	it("Should display the user's name, marked with class 'user-name'", () => {
		const wrapper = shallow(<UserCard />);
		expect(wrapper.find('.user-name')).to.have.length(1);
	});

	it("Should display chill level marked with class 'chill-level'", () => {
		const wrapper = shallow(<UserCard />);
		expect(wrapper.find('.chill-level')).to.have.length(1);
	});
});
