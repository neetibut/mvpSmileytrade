import React, { useState, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { useOnClickOutside } from "./hooks";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { Burger, Menu } from "./components";
import FocusLock from "react-focus-lock";
import heroImage from "./images/1.png";

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </div>
        <div>
          <h2>
            Welcome to your trading terminal <span aria-hidden="true">👋</span>
          </h2>
          <h1>Trade US stocks and Cryptocurrencies</h1>
          <img src={heroImage} alt="smileytrade" />
          <small>
            Made with{" "}
            <span aria-hidden="true" style={{ marginRight: ".5rem" }}>
              ❤️
            </span>
            by <a href="https://www.teamxearth.com">teamxearth</a>
          </small>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
