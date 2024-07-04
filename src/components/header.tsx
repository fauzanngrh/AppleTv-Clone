import { Button } from "./button";
import { Container } from "./container";

export const Header = () => {
  return (
    <>
      <header className="bg-backgroundContrast text-white min-h-[--header-row-height]">
        <Container className="flex items-center min-h-[--header-row-height]">
          <a
            href="/"
            className="h-[--header-row-height] flex items-center px-6 -ml-6"
          >
            Apple <span className="sr-only">Back to homepage</span>
          </a>
        </Container>
      </header>
      <div className="sticky top-0 bg-backgroundContrast z-20 text-white">
        <Container className="flex justify-between items-center min-h-[--header-row-height]">
          <p className="text-xl font-semibold">Apple TV+ </p>
          <Button size="sm">Stream now</Button>
        </Container>
      </div>
    </>
  );
};
