import { Outlet } from "react-router-dom"
import Sidebar from "../components/sidebar"
import Navbar from "../components/navbar"

function RootLayout() {
    return (
        <section>
            <Navbar />
            <div className="pt-12">
                <Sidebar />
                <div className="sm:ml-[320px]">
                    <main className="p-4">
                        <Outlet />
                    </main>
                </div>
            </div>
        </section>
    )
}

export default RootLayout