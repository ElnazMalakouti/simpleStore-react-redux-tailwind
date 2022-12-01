import { Link, Outlet } from "react-router-dom"

const Layout = () => {
    return(
        <div>

            <header>
                <Link to={"/first"}>
                    <button>go to first page</button>
                </Link>
            </header>

            <main>                
                <Outlet/>
            </main>

        </div>
    )
}

export default Layout