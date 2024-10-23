import { Link, useLocation } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"
import { MenuItem } from "./meniItem";
import useGetDomain from "../utils/helper.router";


function Sidebar() {
    const { pathname } = useLocation()

    const {main} = useGetDomain();
    const customeTheme = (path: string) => {

        return main?.subdomain === "nibav" ?
            `${pathname == path ? `bg-[#ecf0fc] rounded-lg border text-[#3e6ae1] border-[#3e6ae1]` : "hover-[#3e6ae1] text-black"}`
            : `${pathname == path ? `bg-[#fbecfc] rounded-lg border text-[#e13ed9] border-[#e13ed9]` : "hover-[#e13ed9] text-black"}`;
    }
    return (
        <Fragment>
            <div className={`fixed bg-white overflow-hidden w-full max-w-[320px] h-full min-h-screen`}>

                <ul className="mt-8">
                    {MenuItem.map((row, i) => (
                        <li key={i}>
                            <Link to={row.path} className={`px-4 py-2 m-2 flex items-center gap-2 font-semibold ${customeTheme(row.path)}`}>
                                {row.icon} {row.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    )
}

export default Sidebar