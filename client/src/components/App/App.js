import './App.css';
import Main from "../../pages/Main/Main";
import {Route, Routes} from "react-router-dom";
import ErrorPage from "../../pages/ErrorPage/ErorPage";
import Header from "../Header/Header";

function App() {
    return (
        <>
        <Header/>
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
        </>
    );
}

export default App;
