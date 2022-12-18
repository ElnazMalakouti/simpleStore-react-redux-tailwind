import "./index.css"
import { Link } from "react-router-dom"
import { FiHeart } from "react-icons/fi"
import { CgShoppingBag } from "react-icons/cg"

const Header = () => {
    return(
        <div className="headerBorderShadow w-full h-[7rem] bg-white flex flex-row justify-between border-b-2 pb-2">
          <div className="w-[20%] h-[90%] ml-[6rem] mt-2">
            <Link to="/products"><img className="w-auto h-full" alt="" src="/pics/logo2.png"/></Link>
          </div>

          <div className="h-full flex justify-center items-center text-[#035972] font-[AmazonLight] text-[22px]">
            <p>Coctail dresses midi length womens dresses evening party formal</p>
          </div>

          <div className="w-[20%] h-full flex flex-row justify-center items-center gap-[1.5rem] font-[AmazonLight]">
            <div className="flex flex-col justify-center items-center text-[#035972]">
              <button className="text-[26px]"><><FiHeart /></></button>
              <p className="text-[16px]">Favorites</p>
            </div>
            <div className="flex flex-col justify-center items-center text-[#035972]">
              <Link to="/shoppingCart"><button className="text-[26px]"><><CgShoppingBag /></></button></Link>
              <p className="text-[16px]">Shopping Cart</p>
            </div>
          </div>
        </div>
    )
}

export default Header