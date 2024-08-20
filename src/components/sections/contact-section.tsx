import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export function ContactSection() {
  return (
    <div id="contact" className="min-h-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Contact me</CardTitle>
          <CardDescription>These are my contact methods</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-evenly gap-y-2">
          <Button variant="link" size="icon" asChild>
            <a href="mailto:jonathankoziel1@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </Button>
          <Button variant="link" size="icon" asChild>
            <a
              href="https://twitter.com/yonat4n_"
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
      </Card>
    </div>
  );
}
