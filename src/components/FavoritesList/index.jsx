import { useSelector } from "react-redux"
import ProductCard from "../ProductCard"

const FavoritesList = () => {

    const favorites = useSelector((state) => state.favorites.favoriteDressId)
    const products = useSelector((state) => state.products.Products)

    return(
        <div className="scrollBar w-full h-full max-h-[80vh] py-3 flex flex-row flex-wrap gap-3 mt-3 overflow-auto justify-center items-start overflow-auto">

            {
                
                favorites.map(fave => {
                    let temp = products.find(item => item.dressId === fave)
                    if(temp){                        
                        return <ProductCard
                        dressId={temp.dressId}
                        dressImage={temp.dressImage}
                        dressName={temp.dressName}
                        dressScore={temp.dressScore}
                        dressDescription={temp.dressDescription}
                        dressSizes={temp.dressSizes}
                        dressPrice={temp.dressPrice}
                        isFavoritePage={true}
                        />
                    }
                })
            }


            {/* <div className="w-[400px] h-auto flex flex-col gap-2 p-3 m-2 border-2">

                <div className="w-full h-[50%] flex justify-center items-center">
                    <img className="max-w-full max-h-full" alt="" src="/pics/KORMEI.png"/>
                </div>

                <div className="w-full mt-2 flex flex-wrap font-[AmazonLight] text-[18px]">
                    <p>KORMEI cocktail dress</p>
                </div>

                <div className="w-full flex justify-end">
                    <p className="text-[21px] "><span className="mr-1">$</span>32</p>
                </div>

                <div className="w-full h-auto flex flex-row gap-2 justify-center items-center">
                    <button className="w-[75%] h-[35px] mt-[1rem] text-[20px] text-white font-[AmazonLight] bg-[#285E76] rounded-[1rem]">Add to cart</button>
                    <button className="w-[25%] h-[32px] text-[15px] text-[#A1A1A1] flex justify-center items-center gap-1 border rounded-[.5rem]"><><BsTrash/></>Remove</button>
                </div>

            </div> */}


        </div>
    )
}

export default FavoritesList