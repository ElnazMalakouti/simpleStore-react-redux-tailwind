import { useSelector } from "react-redux"
import ProductCard from "../ProductCard"


const ProductsList = () => {
    const productList = useSelector(state => state.products.Products)

    return(
        <div className='scrollBar w-full max-h-[82vh] gap-2 pb-2 pt-3 flex flex-row justify-center flex-wrap overflow-auto'>
            {
              productList && productList.map(item => {
                return <ProductCard
                  key={item.dressId}
                  dressId={item.dressId}
                  dressName={item.dressName}
                  dressDescription={item.dressDescription}
                  dressImage={item.dressImage}
                  dressScore={item.dressScore}
                  dressPrice={item.dressPrice}
                />
              })
            }
          </div>
    )
}

export default ProductsList