import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from '../components/ItemDetailContainer'
import Init from "../page/Init";
import PageTablas from "../page/PageTablas"
import Layout from "./Layout";
import Carrito from "../page/Carrito";
const Router = ()=>(
    <BrowserRouter >
        <Routes>
            <Route element={<Layout/>} path={process.env.PUBLIC_URL}>
                <Route index element={<Init />}/>
                <Route path="page/:idCategoria" element={<PageTablas/>}/>
                <Route path="product/:idProduct" element={<ItemDetailContainer/>}/>
                <Route path="cart" element={<Carrito/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default Router
