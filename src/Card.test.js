import { render } from "@testing-library/react";
import Card from "./Card.js";

it("works without crashing", function() {
  render(<Card caption="test" src="test.com" currNum={1} totalNum={3}/>);
});

it("matches snapshot", function() {
  const { container } = render(
    <Card caption="test"
      src="test.com"
      currNum={1}
      totalNum={3}
      />
  );
  expect(container).toMatchSnapshot();
});