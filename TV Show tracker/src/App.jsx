import "./App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import ShowDetailsPage from "./pages/ShowDetailsPage/ShowDetailsPage.jsx";
import WatchListPage from "./pages/WatchListPage/WatchListPage.jsx";
import {ROUTES} from "./constants/routes";
import Layout from "./components/Layout/Layout";

function App() {
    return (
        <>
            <Routes>
                <Route path={ROUTES.HOME} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="shows/:id" element={<ShowDetailsPage/>}/>
                    <Route path={ROUTES.WATCHLIST.slice(1)} element={<WatchListPage/>}/>
                    <Route path="*" element={<h2>Page Not Found</h2>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App