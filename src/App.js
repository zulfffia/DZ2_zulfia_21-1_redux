import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NamePage from "./pages/NamePage";
import {Photo} from "./components/Photo";
import PhotoPage from "./pages/PhotoPage";
import Layout from "./components/hoc/Layout";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout/>}>
                    <Route index element={<NamePage/>}/>
              </Route>
              <Route path='/photo' element={<PhotoPage/>}/>
              <Route path='/photo/:id' element={<Photo/>}/>
              <Route path="*" element={<h1>Ошибка 404</h1>}/>
          </Routes>
      </BrowserRouter>

  );
}
export default App()

// *********************************
            {/*<Route index element={*/}
              {/*    <Container>*/}
              {/*        <MainPage/>*/}
              {/*    </Container>*/}
              {/*}/>*/}
              {/*<Route path="about" element={*/}
              {/*    <Container>*/}
              {/*         <AboutPage/>*/}
              {/*    </Container>*/}
              {/*}/>*/}