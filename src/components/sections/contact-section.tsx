import { LinkedInLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";

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
              <EnvelopeClosedIcon height={36} width={36} />
            </a>
          </Button>
          <Button variant="link" size="icon" asChild>
            <a
              href="https://www.linkedin.com/in/jonathankoziel"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInLogoIcon height={36} width={36} />
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
