import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <Toaster richColors expand position="top-center" duration={2500} />
  </>
);
