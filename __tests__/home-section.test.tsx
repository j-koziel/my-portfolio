import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { HomeSection } from "../src/components/sections/home/home-section";

describe("Home section", () => {
  it("renders the profile picture", () => {
    render(<HomeSection />);

    const profilePicture = screen.getByRole("img");

    expect(profilePicture).toBeInTheDocument();
  });

  it("renders the navigation links", () => {
    render(<HomeSection />);

    const pageLinks = screen.getAllByRole("link");

    pageLinks.forEach((link) => expect(link).toBeInTheDocument());
  });
});
