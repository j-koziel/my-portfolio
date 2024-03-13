import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { BaseSection } from "./base-section";

export function ContactSection() {
  return (
    <BaseSection id="contact">
      <Card>
        <CardHeader>
          <CardTitle>Contact me:</CardTitle>
          <CardDescription>These are my contact methods</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-y-2">
          <Button variant="link" size="icon" asChild>
            <a href="mailto:jonathankoziel1@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </Button>
          <Button variant="link" size="icon" asChild>
            <a
              href="https://twitter.com/j0nathan_k0ziel"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </Button>
          <Button variant="link" size="icon" asChild>
            <a
              href="https://www.linkedin.com/in/jonathankoziel"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </Button>
        </CardContent>
        <CardFooter>
          Feel free to message me about any opportunities :)
        </CardFooter>
      </Card>
    </BaseSection>
  );
}
