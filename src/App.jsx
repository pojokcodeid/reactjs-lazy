import { Suspense, lazy, useState } from "react";
import "./App.css";
import Loading from "./components/Loading";

const MarkdownPreview = lazy(() =>
  delayForDemo(import("./components/MarkdownPreview")),
);

function App() {
  const [showPreview, setShowPreview] = useState(false);
  const [markdown, setMarkdown] = useState("Hello, **Saya Pojok Code**!");
  return (
    <>
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      ></textarea>
      <label>
        <input
          type="checkbox"
          checked={showPreview}
          onChange={(e) => setShowPreview(e.target.checked)}
        />
        Lihat pratinjau
      </label>
      <hr />
      {showPreview && (
        <Suspense fallback={<Loading />}>
          <h2>Pratinjau</h2>
          <MarkdownPreview markdown={markdown} />
        </Suspense>
      )}{" "}
    </>
  );
}

async function delayForDemo(promise) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return promise;
}

export default App;
