import { render } from "preact";
import { About } from "./About";
import { App } from "./App";
import "./css/index.css";

render(
  <App>
    <About />
  </App>,
  document.getElementById("app")!
);
