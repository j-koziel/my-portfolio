import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { NavMenu } from "../src/components/nav-menu";

describe("Navigation menu", () => {
  it("renders the heading", () => {
    render(<NavMenu />);

    const heading = screen.getByText("Jonathan Koziel");

    expect(heading).toBeInTheDocument();
  });

  it("renders the dark mode toggle", () => {
    render(<NavMenu />);

    const darkModeToggle = screen.getByRole("button");

    expect(darkModeToggle).toBeInTheDocument();
  });
});
