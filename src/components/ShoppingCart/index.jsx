import "./index.css"
import { BsTrash } from "react-icons/bs"
import { IoBagCheckOutline } from "react-icons/io5"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useState } from "react"
import { useEffect } from "react"
import {FaPlus} from "react-icons/fa"
import {FaMinus} from "react-icons/fa"
import { addDressOrder } from "../../redux/reducers/orderReducer/orderReducer"
import { removeDressOrder } from "../../redux/reducers/orderReducer/orderReducer"
import { subDressOrder } from "../../redux/reducers/orderReducer/orderReducer"

const ShoppingCart = () => {

    const dispatch = useDispatch()

    const orderlist = useSelector((state) => state.order.orderList)
    const products = useSelector((state) => state.products.Products)

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setTotalPrice(
            orderlist.reduce((sum, current) => {
                const temp = products.find(item => item.dressId === current.dressId)
                if (temp) {                    
                    const totalPrice = temp.dressPrice * current.count
                    return sum + totalPrice
                }
                return sum
            }, 0)
        )
    }, [orderlist])

    return (
        <div className="w-full h-full flex flex-col gap-2">

            <div className="w-full h-full bg-[#EDEDED] flex flex-row p-[1rem] gap-[1rem]">

                <div className="w-full max-h-[76vh] flex flex-col bg-white rounded-[1rem] p-[1.5rem]">
                    <p className="font-[AmazonLight] text-[30px] mb-1">Your Shopping Cart</p>
                    <hr />

                    
                    {/* <div className="w-full h-full flex justify-center items-center text-black text-[30px] font-[AmazonBold]">
                        <p>your shopping cart is empty!</p>
                    </div> */}

                    {/* show orderd products */}
                    <div className="shopCart w-full overflow-auto">
                        <div className="w-full  bg-white flex flex-col">
                            
                            {
                                orderlist && orderlist.map(item => {
                                    const temp = products.find(dress => dress.dressId === item.dressId)
                                    if (temp) {
                                        return <div className="w-full h-[15rem] p-[.8rem] flex flex-row">  
                                            <hr/>                                          
                                            <div className="w-[20%] flex justify-center items-center">
                                                <img alt="" className="w-auto h-full" src={`pics/${temp.dressName}.png`} />
                                            </div>

                                            <div className="w-full flex flex-col justify-between gap-1 font-[AmazonLight]">                                            
                                                <div>
                                                    <p className="text-[22px] mb-3">{temp.dressName} {temp.dressDescription}</p>
                                                </div>

                                                <div className=" flex flex-col">
                                                    <div className="flex flex-col gap-2">
                                                        <p><span className="text-[16px] font-bold">Color: </span> <span className="font-[Amazon] text-[15px]">{item.color}</span></p>
                                                        <p><span className="text-[16px] font-bold">Size: </span> <span className="font-[Amazon] text-[15px]">{item.size}</span></p>
                                                        <div className="flex flex-row gap-1">
                                                            <p className="text-[17px] font-bold">Qty:</p>
                                                            <div className="flex flex-row justify-center items-center gap-2">
                                                                <button disabled={item.count === 1} onClick={()=> dispatch(subDressOrder(item.dressId))} className="w-[1.5rem] h-[1.5rem] rounded-tl-[.25rem] rounded-bl-[.25rem] bg-[#035972] text-[#EDEDED] text-[12px] flex justify-center items-center disabled:bg-[#EDEDED] disabled:text-[#545460]"><><FaMinus/></></button>
                                                                <span>{item.count}</span>
                                                                <button onClick={()=> dispatch(addDressOrder({
                                                                    dressId : item.dressId ,
                                                                    color : item.color,
                                                                    size : item.size ,
                                                                    count : item.count
                                                                    }))} disabled={item.count === 4} className="w-[1.5rem] h-[1.5rem] rounded-tr-[.25rem] rounded-br-[.25rem] bg-[#035972] text-[#EDEDED] text-[12px] flex justify-center items-center disabled:bg-[#EDEDED] disabled:text-[#545460]"><><FaPlus/></></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="w-full flex flex-row justify-between mt-[1rem]">
                                                    <p className="text-[24px] text-red-500">$<span>{temp.dressPrice}</span></p>
                                                    <button onClick={() => dispatch(removeDressOrder(item.dressId))} className="text-[15px] text-[#A1A1A1] flex justify-center items-center gap-1"><><BsTrash /></>Remove</button>
                                                </div>

                                            </div>
                                        </div>
                                    }
                                })
                            }

                            <hr />

                        </div>


                    </div>


                </div>


                {/* calculating orders box */}
                <div className="w-[440px] h-[265px] bg-white rounded-[1rem] flex flex-col p-[1.5rem] gap-[.8rem] font-[AmazonLight]">

                    <div className="w-full flex flex-col gap-[.8rem] pl-[.5rem] pr-[.5rem] text-[18px]">
                        <div className="w-full flex flex-rou justify-between items-center">
                            <p className="font-bold">Subtotal:</p>
                            <p>$<span>{totalPrice}</span></p>
                        </div>
                        <div className="w-full flex flex-rou justify-between items-center">
                            <p className="font-bold">Packing:</p>
                            <p>$<span>{(orderlist.length) * 4}</span></p>
                        </div>
                        <div className="w-full flex flex-rou justify-between items-center">
                            <p className="font-bold">Sales Tax:</p>
                            <p>$<span>{(9 * totalPrice) / 100}</span></p>
                        </div>
                    </div>
                    
                    <hr />

                    <div className="w-full flex flex-rou justify-between items-center pl-[.5rem] pr-[.5rem] text-[20px] font-bold">
                        <p>Total:</p>
                        <p className="text-red-500">$<span>{((totalPrice + ((9 * totalPrice) / 100))) > 0 ? ((totalPrice + ((9 * totalPrice) / 100)) + 14) : 0}</span></p>
                    </div>

                    <div className="w-full flex justify-center items-center ">
                        <button className="w-full h-[50px] flex justify-center items-center gap-3 pl-[.5rem] pr-[.5rem] bg-[#035972] rounded-[.5rem] text-white font-[AmazonLight] text-[22px]">
                            <><IoBagCheckOutline className="text-[26px] font-bold mb-2" /></>
                            Begin Checkout
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ShoppingCart