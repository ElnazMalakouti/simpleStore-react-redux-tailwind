import { useLoaderData } from "react-router-dom"
import { useSelector } from "react-redux"
import { useState } from "react"
import { useEffect } from "react"
import ProductPage from "../../components/ProductPage"

export const loader = async ({ params }) => {
    return params.id
}

const DressPage = () => {
    const dressId = useLoaderData()
    const productList = useSelector(state => state.products.Products)
    const [dressData, setDressData] = useState()

    useEffect(() => {
        productList && setDressData(productList.find(item => item.dressId === +dressId))
    }, [dressId])

    return (
        <div className="scrollBar w-full h-full pt-3 max-h-[80vh] overflow-auto overflow-x-hidden">
            {
                dressData && 
                <ProductPage
                dressImage={dressData.dressImage}
                dressName={dressData.dressName}
                dressScore={dressData.dressScore}
                dressDescription={dressData.dressDescription}
                dressSizes={dressData.dressSizes}
                dressColors={dressData.dressColors}
                dressPrice={dressData.dressPrice}
                dressAttributes={dressData.dressAttributes}
                />
            }            
        </div>
    )
}

export default DressPage