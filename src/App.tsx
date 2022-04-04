import React, { useEffect, useState } from "react";
// import { registerRoute } from "workbox-routing";
// import { NetworkFirst } from "workbox-strategies";
// import { CacheableResponsePlugin } from "workbox-cacheable-response";
// import { precacheAndRoute } from "workbox-precaching";

// Use with precache injection
// import logo from "./logo.svg";
import "./App.css";

function App() {
  const [title, getTitle] = useState<"">("");
  useEffect(() => {
    // precacheAndRoute(self.__WB_MANIFEST);
    // registerRoute(
    //   // Check to see if the request is a navigation to a new page
    //   ({ request }) => request.mode === "navigate",
    //   // Use a Network First caching strategy
    //   new NetworkFirst({
    //     // Put all cached files in a cache named 'pages'
    //     cacheName: "pages",
    //     plugins: [
    //       // Ensure that only requests that result in a 200 status are cached
    //       new CacheableResponsePlugin({
    //         statuses: [200],
    //       }),
    //     ],
    //   })
    // );
    // if ("serviceWorker" in navigator) {
    //   // Use the window load event to keep the page load performant
    //   window.addEventListener("load", () => {
    //     navigator.serviceWorker.register("/service-worker.js");
    //   });
    // }
    fetch("https://yd-cloudflare-server-ts.9760414764447.workers.dev/")
      .then((response: Response) => response?.json())
      .then((data) => {
        // let obj = JSON.parse(data);
        console.log(data);
        getTitle(data);
      });
  }, []);
  return (
    <div className="App">
      <h2>标题</h2>
      {title}
    </div>
  );
}

export default App;
