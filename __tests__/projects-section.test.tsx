import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { ProjectsSection } from "../src/components/sections/projects-section";

describe("Projects section", () => {
  it("renders the section heading", () => {
    render(<ProjectsSection />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });

  it("renders the project cards", () => {
    render(<ProjectsSection />);

    const projectHeadings = screen.getAllByRole("heading", { level: 3 });
    const projectDescriptions = screen.getAllByRole("paragraph");
    const projectImages = screen.getAllByRole("img");

    projectHeadings.forEach((heading) => expect(heading).toBeInTheDocument());
    projectDescriptions.forEach((description) =>
      expect(description).toBeInTheDocument()
    );
    projectImages.forEach((image) => expect(image).toBeInTheDocument());
  });
});
