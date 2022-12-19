// import { useEffect } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import ProductCard from "../ProductCard"


const ProductsList = () => {

  const [filteredSizeDresses, setFilteredSizeDresses] = useState([])

  const [sizeRadioValue, setSizeRadioValue] = useState("All")
  

  const filterSizes = (size) => {
    if(size === 'All'){
      setFilteredSizeDresses(productList)
    }else{
      const temp = productList.filter(item => {
        if (item.dressSizes.includes(size, 0)) {
          return item
        }
      })
      setFilteredSizeDresses(temp)
    }
  }

  useEffect(()=>{
    filterSizes(sizeRadioValue)
  },[sizeRadioValue])


  const productList = useSelector(state => state.products.Products)

  return (
    <div className=" scrollBar w-full h-full flex flex-row overflow-auto">

      
      <div className="w-[15%] h-full gap-2 p-1 pl-2 pr-2 bg-[#EDEDED] border-r-2 fixed left-0 flex flex-col font-[AmazonLight]">

        <div className="m-[1px] p-2 bg-white">
          <p>Select Size</p>
          <hr />
          <div className="flex flex-col gap-1 text-[#545460]" onChange={(e) => setSizeRadioValue(e.target.value)}>
            <label className="flex flex-row gap-1 items-center">              
              <input type={'radio'} value={'All'} name={'size'} checked={sizeRadioValue === 'All'}/>
              <p>All</p>
            </label>
            <label className="flex flex-row gap-1 items-center">              
              <input type={'radio'} value={'S'} name={'size'} checked={sizeRadioValue === 'S'}/>
              <p>Small</p>
            </label>
            <label className="flex flex-row gap-1 items-center">              
              <input type={'radio'} value={'L'} name={'size'} checked={sizeRadioValue === 'L'}/>
              <p>Large</p>
            </label>
            <label className="flex flex-row gap-1 items-center">              
              <input type={'radio'} value={'XL'} name={'size'} checked={sizeRadioValue === 'XL'}/>
              <p>X-Large</p>
            </label>
          </div>
        </div>

        <div className="m-[1px] p-2 bg-white">
          <p>Sort Price</p>
          <hr />
          <div className="flex flex-col gap-1 text-[#545460]">
            <label className="flex flex-row gap-1 items-center">              
              <input type={'radio'} value={'Lowest'} name={'size'} />
              <p>Lowest price</p>
            </label>
            <label className="flex flex-row gap-1 items-center">              
              <input type={'radio'} value={'Highest'} name={'size'} />
              <p>Highest price</p>
            </label>
          </div>
        </div>
      </div>

      <div className='w-[85%] max-h-[84vh] ml-auto py-3'>
        <div className="scrollBar w-full h-full flex flex-row justify-center flex-wrap gap-2 pb-3 overflow-auto">
          {
            filteredSizeDresses && filteredSizeDresses.map(item => {
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
      </div>

    </div>
  )
}

export default ProductsList