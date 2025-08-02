import { useState } from "react";
import "./App.css";
import LinksContextProvider from "./context/link-context";
import AddLink from "./components/AddLink";
import LinksSection from "./components/LinksSection";
import Navbar from "./components/NavBar";
import { ThemeProvider } from "./context/theme-context";

function App() {
  return (
    <>
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>
      <LinksContextProvider>
        <div className="content">
          <AddLink />
          <LinksSection />
        </div>
      </LinksContextProvider>
    </>
  );
}

export default App;
