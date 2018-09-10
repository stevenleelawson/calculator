import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
    wrapper.setState({
      numbers: ["2","+","2"]
    });
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('evaluates operations in state', () => {

    wrapper.instance().handleEvaluateClick();

    expect(wrapper.state('numbers')).toEqual([4])
  });

  it('clears state on click of clear button', () => {

    wrapper.instance().handleClearClick();

    expect(wrapper.state('numbers')).toEqual([])
  });

  it('removes item from state when delete button clicked', () => {

    wrapper.instance().handleDelClick();

    expect(wrapper.state('numbers')).toEqual(["2","+"])
  });

  it('finds percent when % button is clicked', () => {
    wrapper.setState({
      numbers: ["4"]
    });

    wrapper.instance().handlePercentClick();

    expect(wrapper.state('numbers')).toEqual([.04])
  });

  it('finds square root when sqrt button is clicked', () => {
    wrapper.setState({
      numbers: ["4"]
    });
    wrapper.instance().handleSqClick();

    expect(wrapper.state('numbers')).toEqual([2])
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
