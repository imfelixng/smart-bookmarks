import { createRoot } from "react-dom/client";
import "./style.css";
import { Content } from "./content";

const div = document.createElement("div");
div.id = "sb__ext_root";
document.querySelector("#rso")?.prepend(div);

const rootContainer = document.querySelector("#sb__ext_root");
if (!rootContainer) throw new Error("Can't find Content root element");
const root = createRoot(rootContainer);

root.render(
  <div className="text-black">
    <Content />
  </div>
);

try {
  console.log("content script loaded");
} catch (e) {
  console.error(e);
}
