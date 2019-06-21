import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import App from "./App";

describe("<App />", () => {
  const INPUT_TEXT = "Look at this test, isn't this neat";
  const event = { target: { value: INPUT_TEXT } };

  describe("Snapshot Tests", () => {
    const wrapper = mount(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("Unit Tests", () => {
    it("should setState to the value of the target that is passed in", () => {
      const wrapper = shallow(<App />);
      const topLineEvent = {
        ...event,
        target: { ...event.target, name: "topLine" }
      };
      wrapper.instance().handleChange(topLineEvent);
      expect(wrapper.state("topLine")).toEqual(INPUT_TEXT);
    });
  });

  describe("Integration Tests", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(<App />);
    });

    it("should display the top line of text when something is entered into the topLine input", () => {
      const topLineInput = wrapper.find("#top-line-input");
      const topLineEvent = {
        ...event,
        target: { ...event.target, name: "topLine" }
      };
      topLineInput.simulate("change", topLineEvent);
      const topLineText = wrapper.find("#top-line-text");
      expect(topLineText.text()).toEqual(INPUT_TEXT);
    });

    it("should display the bottom line of text when something is entered into the bottomLine input", () => {
      const bottomLineInput = wrapper.find("#bottom-line-input");
      const bottomLineEvent = {
        ...event,
        target: { ...event.target, name: "bottomLine" }
      };
      bottomLineInput.simulate("change", bottomLineEvent);
      const bottomLineText = wrapper.find("#bottom-line-text");
      expect(bottomLineText.text()).toEqual(INPUT_TEXT);
    });
  });
});
