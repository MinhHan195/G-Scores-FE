import { BrowserRouter, Routes, Route } from "react-router";
import DashBoard from "../pages/dashBoard/dashBoard";
import SearchScores from "../pages/searchScores/searchScores";
import TopGroup from "../pages/TopGroup/topGroup";
// import Done from "../pages/Done/Done";
function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashBoard />} />
                <Route path="/search" element={<SearchScores />} />
                <Route path="/top" element={<TopGroup />} />
            </Routes>
        </BrowserRouter>
    );
}
export default AppRouter;
