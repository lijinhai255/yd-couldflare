import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [title, getTitle] = useState<"">("");
  useEffect(() => {
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
