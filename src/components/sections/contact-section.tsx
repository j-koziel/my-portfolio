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
    <div id="contact" className="mt-10 flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Contact me</CardTitle>
          <CardDescription>
            Use any of these methods to contact me about opportunities
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center gap-y-2 gap-x-2">
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
