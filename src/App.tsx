import {Route, Routes} from "react-router";
import {Layout} from "./components/layout/Layout.tsx";
import {HomePage} from "./pages/HomePage.tsx";
import {PageBio} from "./pages/PageBio.tsx";
import PortfolioPage from "./pages/PortfolioPage.tsx";


function App() {
return(
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<HomePage/>}></Route>
        <Route path={"/bio"} element={<PageBio/>}/>
          <Route path={"/portfolio"} element={<PortfolioPage/>}/>
      </Route>

    </Routes>)
}

export default App
