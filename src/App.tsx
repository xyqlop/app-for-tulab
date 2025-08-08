import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import PageLayout from "./layouts/PageLayout";
import HeaderNavbar from "./layouts/HeaderNavbar";
import FooterNavbar from "./layouts/FooterNavbar";
import AddDataPage from "./pages/AddDataPage";
import DataPage from "./pages/DataPage";

function App() {
  return (
    <>
      <HeaderNavbar />
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-data" element={<AddDataPage />} />
          <Route path="/data" element={<DataPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </PageLayout>
      <FooterNavbar />
    </>
  );
}

export default App;
