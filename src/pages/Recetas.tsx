import Navbar_Menu from "@/components/navbarMenu"
import Carousel from "@/components/carouselFood"
export default function Recetas() {
    return(
        <>
            <Navbar_Menu />
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-blue-700 text-3xl font-bold">Recetas</h1>
                <Carousel />
            </div>
        </>
    )
}