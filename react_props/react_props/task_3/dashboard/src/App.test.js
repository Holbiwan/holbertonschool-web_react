import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App component", () => {
	it("renders without crashing", () => {
		const wrapper = shallow(<App />);
		expect(wrapper.exists()).toBeTruthy();
	});

	it("renders a div with the class App-header", () => {
		const wrapper = shallow(<App />);
		const appHeader = wrapper.find(".App-header");
		expect(appHeader.exists()).toBeTruthy();
	});

	it("renders a div with the class App-body", () => {
		const wrapper = shallow(<App />);
		const appBody = wrapper.find(".App-body");
		expect(appBody.exists()).toBeTruthy();
	});

	it("renders a div with the class App-footer", () => {
		const wrapper = shallow(<App />);
		const appFooter = wrapper.find(".App-footer");
		expect(appFooter.exists()).toBeTruthy();
	});
});
