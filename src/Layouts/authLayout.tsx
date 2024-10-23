import { Outlet } from 'react-router-dom'

function AuthLayout() {
    return (
        <section className="bg-[url('https://tipalti.com/wp-content/uploads/2023/11/media_wave-dark-bg.webp')]
        bg-no-repeat bg-cover">
            <Outlet />
        </section>
    )
}

export default AuthLayout