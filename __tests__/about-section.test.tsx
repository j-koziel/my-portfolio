import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { AboutSection } from "../src/components/sections/about-section";

describe("About section", () => {
  it("renders the heading", () => {
    render(<AboutSection />);

    const aboutSectionHeading = screen.getByRole("heading");

    expect(aboutSectionHeading).toBeInTheDocument();
  });

  it("renders about me text", () => {
    render(<AboutSection />);

    const text = screen.getByRole("paragraph");

    expect(text).toBeInTheDocument();
  });

  it("renders scroll below link", () => {
    render(<AboutSection />);

    const link = screen.getByRole("link");

    expect(link).toBeInTheDocument();
  });
});
