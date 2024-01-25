import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "./public-path";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

let root = null;
function render(props) {
  let { container } = props;
  container = container
    ? container.querySelector("#root")
    : document.getElementById("root");
  root = createRoot(container);
  root.render(
    <BrowserRouter
      basename={window.__POWERED_BY_QIANKUN__ ? "/sub-app-3" : "/"}
    >
      <App />
    </BrowserRouter>
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log("react app bootstraped");
}

export async function mount(props) {
  console.log("props from main framework", props);
  render(props);
}

export async function unmount() {
  root.unmount();
  root = null;
}

reportWebVitals();
