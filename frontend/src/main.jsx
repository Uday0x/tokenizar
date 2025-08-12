// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

function Root() {
  const [dark, setDark] = React.useState(() => {
    try {
      const s = localStorage.getItem('tokenizar:dark');
      if (s !== null) return s === '1';
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch (e) {
      return false;
    }
  });

  React.useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('tokenizar:dark', dark ? '1' : '0');
  }, [dark]);

  return <App dark={dark} setDark={setDark} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);