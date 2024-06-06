import {
  Html,
  Body,
  Container,
  Preview,
  Text,
  Link,
} from "@react-email/components";

Html;

function WelcomeTemplates({ name }: { name: string }) {
  return (
    <Html>
      <Preview>Hello This is react email</Preview>
      <Body>
        <Text>greeting from {name}</Text>
        <Link href="https://www.youtube.com">Visit youtube</Link>
      </Body>
    </Html>
  );
}

export default WelcomeTemplates;
