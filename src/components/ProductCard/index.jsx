import "./index.css"
import StarRatings from "react-star-ratings"

import { BsFillHeartFill } from "react-icons/bs"

const ProductCard = ({
    dressId ,
    dressImage ,
    dressName ,
    dressScore,
    dressDescription,
    dressSizes ,
    dressIsFavorite ,
    dressPrice
}) => {
    return (
        <div className="w-[300px] h-[410px] bg-[#EDEDED] rounded-2xl flex flex-col Bshadow">
            <div className="w-full h-[60%] flex justify-center items-center">
                <div className="w-full h-full flex justify-center items-center">
                    <img alt="" className="max-w-full max-h-full h-[250px]" src={dressImage} />
                </div>
            </div>

            <div className="w-full h-[40%] bg-[#285E76] rounded-tr-[6.5rem] flex flex-col pt-3 pr-3 pl-3 pb-0 text-white">
                <div>
                    <p className="font-[PlayFairRegular] text-[18px]">{dressName}</p>
                    <div className="mt-[-8px]">                        
                        <StarRatings
                            rating={dressScore}
                            starDimension="14px"
                            starSpacing="1px"
                            starRatedColor="#FECC0A"
                            starEmptyColor="transparent"
                        />
                    </div>
                </div>
                <div className="w-full">
                    <p className="text-[#C6C6CA] text-[12px] mt-2">
                        {dressDescription}
                    </p>
                </div>
                <div className="flex flex-row justify-between items-center mt-[1rem] font-bold">
                    <p className="text-[21px] "><span className="mr-1">$</span>{dressPrice}</p>
                    <button className="w-[150px] h-[40px] bg-white text-[#051E42] rounded-[2.5rem] ring-1 ring-white ring-offset-2 ring-offset-[#051E42] hover:bg-[#B4CDD5]">Add to cart</button>
                    <button className="w-[40px] h-[40px] text-[18px] rounded-[50%] bg-white text-[#051E42] flex justify-center items-center ring-1 ring-white ring-offset-2 ring-offset-[#051E42] hover:text-red-600"><><BsFillHeartFill /></></button>
                </div>
            </div>

        </div>
    )
}

export default ProductCard