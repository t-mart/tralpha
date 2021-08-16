import type { ComponentChildren } from "preact";

import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = {
  children: ComponentChildren;
};

export function App({ children }: Props) {
  return (
    <div class="container max-w-screen-lg px-4 space-y-8 my-8 relative">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

