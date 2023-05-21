import { Route, Routes } from 'react-router-dom';
import {ImageUpload} from "./Main";
import { BrowserRouter  } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><ImageUpload />    </>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;