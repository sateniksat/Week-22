import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Invoice from "./pages/Invoice";
import Invoices from "./pages/Invoices";
import Rules from "./pages/Rules";
import Welcome from "./pages/Welcome";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />}>
        <Route index={true} element={<Rules />} />
        <Route path="/invoice" element={<Invoices />}>
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here! 404</p>
            </main>
          }
        />
      </Route>
    </Routes>
  );
}
