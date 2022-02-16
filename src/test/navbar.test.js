import Navbar from "../Components/navbar";
import React from "react";
import renderer from "react-test-renderer";

describe("Navbar", () => {
  it("renders", () => {
    const Component = renderer.create(<Navbar totalCount={4} />);
    expect(Component.toJSON()).toMatchSnapshot();
  });
});
