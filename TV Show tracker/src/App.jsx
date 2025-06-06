import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShowDetailsPage from "./pages/ShowDetailsPage";
import WatchListPage from "./pages/WatchListPage";
import { ROUTES } from "./constants/routes";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
          <Routes>
              <Route path={ROUTES.HOME} element={<Layout />}>
                  <Route index element={<HomePage />} />
                  <Route path={ROUTES.SHOW_DETAILS.slice(1)} element={<ShowDetailsPage />} />
                  <Route path={ROUTES.WATCHLIST.slice(1)} element={<WatchListPage />} />
                  <Route path="*" element={<h2>Page Not Found</h2>} />
              </Route>
          </Routes>
    </>
  )
}

export default App
