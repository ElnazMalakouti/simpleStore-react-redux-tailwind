import "./index.css"
import Button from "../Button"
import { Link } from "react-router-dom"

const LandingPage = () => {
    return (
        <div className="bgImage w-full h-full flex justify-center items-center">
            <div className="w-[30%] h-[40%] flex flex-col justify-center items-center gap-[5rem]">

                <div className="w-full flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center text-[#051E42] font-[PlayFairBlack]">
                        <p className="text-[50px] tracking-wide h-[55px]">COCTAIL</p>
                        <p className="font-[PlayFairRegular] text-[38px]">COLLECTION</p>
                    </div>
                    <p className="pl-2 pr-2 font-[lato] font-bold text-white tracking-wide text-[25px] mt-[1rem] bg-[#051E42] bg-opacity-30">Women's Cocktail Dresses</p>
                </div>

                <div>
                    <Link to="/products">
                        <Button>SHOP NOW</Button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default LandingPage