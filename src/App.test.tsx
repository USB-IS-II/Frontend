import { render } from "@testing-library/react";
import App from "./App";

describe("Default Test", () => {
  test("App renders", () => {
    const app = render(<App />);
    expect(app.container.firstChild).toBeInTheDocument();
  });
});
