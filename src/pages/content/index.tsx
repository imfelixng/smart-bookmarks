import { createRoot } from "react-dom/client";
import "./style.css";

const div = document.createElement("div");
div.id = "sb__ext_root";
document.body.appendChild(div);

const rootContainer = document.querySelector("#sb__ext_root");
if (!rootContainer) throw new Error("Can't find Content root element");
const root = createRoot(rootContainer);

root.render(
  <div className="fixed top-0 left-0 text-lg text-black bg-amber-400 z-1000">
    content script loaded
  </div>
);

try {
  console.log("content script loaded");
  console.log("AAAA " + chrome.bookmarks);
  chrome.bookmarks?.getTree().then((i) => {
    console.log("[DATA]: " + i);
  });
} catch (e) {
  console.error(e);
}
