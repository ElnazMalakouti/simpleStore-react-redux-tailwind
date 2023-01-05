import StarRatings from "react-star-ratings"
import "./index.css"
import { useDispatch } from "react-redux"
import { addDressOrder } from "../../redux/reducers/orderReducer/orderReducer"
import { useState } from "react"
import { toast } from "react-toastify"


const ProductPage = ({
    dressId,
    dressImage,
    dressName,
    dressScore,
    dressDescription,
    dressSizes,
    dressColors,
    dressPrice,
    dressAttributes }) => {

    const dispatch = useDispatch()

    const AddDressNotify = () => toast("added to shopping cart" , {theme : 'colored' , type : 'success'});
    const unspecifiedColor = () => toast("please select a color!!!",{theme : 'colored' , type : 'error'})
    const unspecifiedSize = () => toast("please select a size!!!",{theme : 'colored' , type : 'error'})

    const [selectedColor, setSelectedColor] = useState('')
    const [selectedSize, setSelectedSize] = useState('')
    const [selectedCount, setSelectedCount] = useState(1)
    const [disableButton , setDisableButton] = useState(false)

    return (
        <div className="w-full h-full flex flex-row ml-[1rem]">

            <div className="w-[25%] h-full mr-4 bg-[#EDEDED] flex justify-center items-center">
                <img className="h-full" alt="" src={dressImage} />
            </div>

            <div className="w-[60%] h-full ml-[1rem] text-[24px] flex flex-col gap-2">
                <p className="text-[#035972] font-[AmazonBold]">{dressName}{dressDescription}</p>
                <div className="mt-[-20px]">
                    <StarRatings
                        rating={dressScore}
                        starDimension="20px"
                        starSpacing="1px"
                        starRatedColor="#FECC0A"
                        starEmptyColor="transparent"
                    />
                </div>
                <hr />

                <div className="font-[AmazonLight] tracking-wide">
                    <p className="text-[17px] font-bold text-[#78807C]">Price: <span className="text-[22px] text-red-600"><span>$</span><span>{dressPrice}</span></span></p>

                    <div className="flex flex-row items-center gap-2 mt-[.5rem]">
                        <p className="text-[17px] font-bold text-[#78807C]">Color:</p>
                        <div className="flex flex-row gap-4" onChange={(e) => setSelectedColor(e.target.value)}>
                            {
                                dressColors.map(item => {
                                    return <input type="radio" value={item.name} checked={selectedColor === item.name} name="dressColor" key={item.id} style={{ backgroundColor: `${item.code}` }} className="customRadio w-[32px] h-[32px] ring-1 ring-[#D2D4D3] ring-offset-2 rounded-[50%] cursor-pointer checked:ring-4 checked:ring-[#007ACC]" />
                                })
                            }
                        </div>
                    </div>

                    <div className="flex flex-row items-center gap-2 mt-[1rem]">
                        <p className="text-[17px] font-bold text-[#78807C]">Size:</p>
                        <select onChange={(e) => setSelectedSize(e.target.value)} className="w-[100px] h-[33px] p-1 text-[15px] text-[#545460] border-[1px] border-solid border-[#8C8D8C] rounded-[.5rem] cursor-pointer outline-none hover:bg-[#EBEBEB]">
                            <option value="" disabled selected hidden>Select</option>
                            {dressSizes.map(item => {
                                return <option value={item} checked={selectedSize === item} key={item}>{item}</option>
                            })}
                        </select>
                    </div>

                    <div className="flex flex-row items-center gap-2 mt-[1rem]">
                        <p className="text-[17px] font-bold text-[#78807C]">Qty:</p>
                        <select onChange={(e) => setSelectedCount(e.target.value)} className="w-[40px] h-[30px] p-1 text-[16px] text-[#545460] border-[1px] border-solid border-[#8C8D8C] rounded-[.5rem] cursor-pointer outline-none hover:bg-[#EBEBEB]">
                            <option value={1} onClick={selectedCount === 1}>1</option>
                            <option value={2} onClick={selectedCount === 2}>2</option>
                            <option value={3} onClick={selectedCount === 3}>3</option>
                            <option value={4} onClick={selectedCount === 4}>4</option>
                        </select>
                    </div>

                    <p className="text-[17px] font-bold text-[#78807C] mt-[1rem]">Attributes:</p>
                    <ul style={{ listStyleType: "disc" }} className="text-[17px] text-[#545460] ml-[1.5rem]">
                        {dressAttributes.map(item => {
                            return <li>{item}</li>
                        })}
                    </ul>

                    <button disabled={disableButton} className="w-[200px] h-[38px] mt-[1rem] text-[20px] text-white font-[AmazonLight] bg-[#285E76] rounded-[1rem] disabled:bg-[#EDEDED] disabled:text-[#545460]" onClick={() => {
                        {
                            selectedColor && selectedSize
                            ?
                            (
                                function foo () {
                                    dispatch(addDressOrder({
                                        dressId: dressId,
                                        color: selectedColor,
                                        size: selectedSize,
                                        count: selectedCount,
                                    }))
                                    AddDressNotify()
                                    setDisableButton(true)
                                }()
                            )
                            :
                            (
                                function bar () {
                                    if(!selectedColor){
                                        unspecifiedColor()
                                    }
                                    if(!selectedSize){
                                        unspecifiedSize()
                                    }
                                }()
                            )
                        }
                    }}>{disableButton ? "in shopping cart" : "Add to cart"}</button>

                </div>
            </div>

        </div>
    )
}

export default ProductPage