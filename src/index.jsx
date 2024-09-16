import React from "react";
import ReactDOMClient from "react-dom/client";
import { IphoneSe } from "./screens/IphoneSe";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<IphoneSe />);
