import { useSelector } from "react-redux"
import ProductCard from "../ProductCard"

const FavoritesList = () => {

    const favorites = useSelector((state) => state.favorites.favoriteDressId)
    const products = useSelector((state) => state.products.Products)

    return(
        <div className="scrollBar w-full h-full max-h-[80vh] py-3 flex flex-row flex-wrap gap-3 mt-3 overflow-auto justify-center items-start overflow-auto">

            {
                favorites.length > 0 
                ?                               
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
                
                :
                    <div className="w-full h-full font-[AmazonBold] text-[30px] flex justify-center items-center">Your favorites list is empty!</div>
            }

            


        </div>
    )
}

export default FavoritesList