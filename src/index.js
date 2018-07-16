import React from "react";
import ReactDOM from "react-dom";
import "./docs/index.css";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Docs from "./docs/Docs";
import "../node_modules/highlight.js/styles/ir-black.css";
import registerServiceWorker from "./registerServiceWorker";

configure({ adapter: new Adapter() });

ReactDOM.render(<Docs />, document.getElementById("root"));
registerServiceWorker();
