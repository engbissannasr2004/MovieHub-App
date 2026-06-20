import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./context/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/MovieHub-App">
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
