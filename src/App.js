import React from "react";
import { BrowserRouter } from "react-router-dom";

import Paths from "./routes";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Paths />
      </BrowserRouter>
    </>
  );
}
