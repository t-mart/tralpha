import { render } from "preact";
import { Translator } from "./Translator";
import { App } from "./App";
import "./css/index.css";

render(
  <App>
    <Translator />
  </App>,
  document.getElementById("app")!
);
