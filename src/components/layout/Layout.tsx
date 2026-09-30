import {Header} from "../Header.tsx";
import {Outlet} from "react-router";

export function Layout(){
    return(<div className="bg-[url('src/assets/Textura2.jpg')] bg-cover bg-center min-vh-100 min-vw-100 flex min-h-screen flex-col" >
        <Header />
        <Outlet />
    </div>)

}