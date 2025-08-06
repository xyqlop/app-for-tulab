import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import PageLayout from "./layouts/PageLayout";
import HeaderNavbar from "./layouts/HeaderNavbar";

function App() {
  return (
    <>
      <HeaderNavbar />
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </PageLayout>
    </>
  );
}

export default App;
