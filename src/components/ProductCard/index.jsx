import "./index.css"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { changeFavoriteMode } from "../../redux/reducers/favoritesReducer/favoritesReducer"
import StarRatings from "react-star-ratings"
import { BsFillHeartFill } from "react-icons/bs"
import { BsTrash } from "react-icons/bs"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"

const ProductCard = ({
    dressId,
    dressImage,
    dressName,
    dressScore,
    dressDescription,
    dressSizes,    
    dressPrice,
    isFavoritePage
}) => {

    const dispatch = useDispatch()

    const favorites = useSelector((state) => state.favorites.favoriteDressId)
    const products = useSelector((state) => state.products.Products)

    const [favoriteState , setFavoriteState] = useState()



    useEffect(()=>{
        setFavoriteState(favorites.find(item => item === dressId))
    },[favorites])

    return (
        
            <div className="w-[300px] h-[415px] bg-[#EDEDED] rounded-2xl flex flex-col Bshadow">
            <Link to={`/products/${dressId}`} className='w-full h-auto'>
                <div className="w-full h-auto flex justify-center items-center">
                    <div className="w-full h-full flex justify-center items-center">
                        <img alt="" className="max-w-full max-h-full h-[250px]" src={dressImage} />
                    </div>
                </div>
            </Link>

                <div className="w-full h-[70%] bg-[#285E76] rounded-tr-[6.5rem] flex flex-col pt-3 pr-3 pl-3 pb-0 text-white">
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
                        <p className="text-[19px] "><span className="mr-1">$</span>{dressPrice}</p>
                        <button className="w-[145px] h-[40px] bg-white text-[#051E42] rounded-[2.5rem] ring-1 ring-white ring-offset-2 ring-offset-[#051E42] hover:bg-[#B4CDD5]">See more info</button>
                        {
                            isFavoritePage
                                ? 
                            <button onClick={() => {                            
                                dispatch(changeFavoriteMode(dressId))                            
                            }} className={`w-[80px] h-[32px] p-[3px] text-[14px] rounded-[1rem] bg-[#285E76] ring-1 ring-white ring-offset-1 ring-offset-[#285E76] text-white flex gap-[.20rem] justify-center items-center border`}><><BsTrash /></>remove</button>
                                :
                                <button onClick={() => {                            
                                    dispatch(changeFavoriteMode(dressId))                            
                                }} className={`w-[40px] h-[40px] text-[18px] rounded-[50%] bg-white text-[#051E42] flex justify-center items-center ring-1 ring-white ring-offset-2 ring-offset-[#051E42] ${favoriteState ? "text-red-600" : ""}`}><><BsFillHeartFill /></></button>
                        }
                    </div>                    
                </div>

            </div>
        
    )
}

export default ProductCard