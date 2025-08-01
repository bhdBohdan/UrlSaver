import { useState } from "react";
import "./App.css";
import LinksContextProvider from "./context/link-context";
import AddLink from "./components/AddLink";
import LinksSection from "./components/LinksSection";

function App() {
  return (
    <LinksContextProvider>
      <AddLink />
      <LinksSection />
    </LinksContextProvider>
  );
}

export default App;
