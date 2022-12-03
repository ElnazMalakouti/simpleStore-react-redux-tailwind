import "./index.css"

import {ImStarFull} from "react-icons/im"
import {ImStarHalf} from "react-icons/im"
import {BsFillHeartFill} from "react-icons/bs"

const ProductCard = ()=> {
    return(
        <div className="w-[300px] h-[410px] bg-[#EDEDED] rounded-2xl flex flex-col Bshadow">
            <div className="w-full h-[60%] flex justify-center items-center">
                <div className="w-full h-full flex justify-center items-center">
                    <img alt="" className="max-w-full max-h-full w-[130px] h-[250px]" src="https://o.remove.bg/downloads/23bcb827-54ea-4cdf-b414-cfcf98ddaa94/613PaDesXdL._MCnd_AC_UL320_-removebg-preview.png"/>
                </div>
            </div>
            <div className="w-full h-[40%] bg-[#051E42] rounded-tr-[6.5rem] flex flex-col pt-3 pr-3 pl-3 pb-0 text-white">
                <div>
                    <p className="font-[PlayFairRegular] text-[18px]">CHICCLOTH</p>
                    <p className="flex flex-row mt-1 text-[#FECC0A] text-[12px]"><><ImStarFull/><ImStarFull/><ImStarFull/><ImStarFull/><ImStarHalf/></></p>                    
                </div>
                <div className="w-full">
                    <p className="text-[#C6C6CA] text-[12px] mt-2">
                    Women's Ruffled Sleeves V Neck Midi Formal Party Dress Sheath Pencil Cocktail Dresses
                    </p>
                </div>
                <div className="flex flex-row justify-between items-center mt-[1rem] font-bold">
                    <p className="text-[21px] "><span className="mr-1">$</span>50</p>
                    <button className="w-[150px] h-[40px] bg-white text-[#051E42] rounded-[2.5rem] ring-1 ring-white ring-offset-2 ring-offset-[#051E42] hover:bg-[#B4CDD5]">Add to cart</button>
                    <button className="w-[40px] h-[40px] text-[18px] rounded-[50%] bg-white text-[#051E42] flex justify-center items-center ring-1 ring-white ring-offset-2 ring-offset-[#051E42] hover:text-red-600"><><BsFillHeartFill/></></button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard