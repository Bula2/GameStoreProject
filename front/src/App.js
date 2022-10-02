import cls from './App.module.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import {Route, Routes} from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Instruction from "./components/Instruction/Instruction";
import Basket from "./components/Basket/Basket";
import Login from "./components/Login/Login";

function App() {
    return (
        <div className={cls.wrapper}>
            <div className={cls.content}>
                <Header/>
                <Routes>
                    <Route path="" element={<Main/>}/>
                    <Route path="/shop" element={<Shop/>}/>
                    <Route path="/instruction" element={<Instruction/>}/>
                    <Route path="/basket" element={<Basket/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </div>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default App;
