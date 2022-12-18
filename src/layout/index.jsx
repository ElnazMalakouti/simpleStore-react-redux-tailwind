import Header from "../components/Header"

const Layout = ({children})=> {
    return(
        <div className="w-full h-full">
            <Header/>
            <div className="w-full h-full">
                {children}
            </div>
        </div>
    )
}

export default Layout