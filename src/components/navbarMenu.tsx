import { NavLink } from "react-router-dom";

export default function Navbar_Menu() {
  return (
    <>
      <nav className="bg-blue-500 p-6">
        <div className="flex items-center justify-between">
          <div className="text-white text-lg">
            <NavLink to="/dasboard" className="px-2" >
              Dasboard
            </NavLink>
            <NavLink
              to="/estadistica"
              className="px-2"
              
            >
              Estadistica
            </NavLink>
            <NavLink to="/agua" className="px-2" >
              Agua
            </NavLink>
            <NavLink to="/perfil" className="px-2" >
              Perfil
            </NavLink>
            <NavLink to="/recetas" className="px-2" >
              Recetas
            </NavLink>
            <NavLink to="/" className="px-2" >
              Salir
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}
