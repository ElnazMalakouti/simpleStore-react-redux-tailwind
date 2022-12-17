import StarRatings from "react-star-ratings"
import "./index.css"

const ProductPage = ({
    dressImage,
    dressName,
    dressScore,
    dressDescription,
    dressSizes,
    dressColors,
    dressPrice,
    dressAttributes}) => {
    return (
        <div className="w-full h-[90%] flex flex-row ml-[1rem]">

            <div className="w-[25%] h-full mr-4 bg-[#EDEDED] flex justify-center items-center">
                <img className="h-full" alt="" src={dressImage} />
            </div>

            <div className="w-[60%] h-full ml-[1rem] text-[24px] flex flex-col gap-2">
                <p className="text-[#035972] font-[AmazonBold]">{dressName}{dressDescription}</p>
                <div className="mt-[-8px]">
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

                    <div className="flex flex-row items-center gap-2 mt-[1rem]">
                        <p className="text-[17px] font-bold text-[#78807C]">Color:</p>
                        <div className="flex flex-row gap-4">
                            {
                                dressColors.map(item => {
                                    return <button style={{backgroundColor:`${item.code}`}} className="w-[32px] h-[32px] ring-1 ring-[#D2D4D3] ring-offset-4 rounded-[50%]"></button>
                                })
                            }
                        </div>
                    </div>

                    <div className="flex flex-row items-center gap-2 mt-[1.5rem]">
                        <p className="text-[17px] font-bold text-[#78807C]">Size:</p>
                        <select className="w-[100px] h-[33px] p-1 text-[15px] text-[#545460] border-[1px] border-solid border-[#8C8D8C] rounded-[.5rem] cursor-pointer outline-none hover:bg-[#EBEBEB]">
                            <option value="" disabled selected hidden>Select</option>
                            {dressSizes.map(item => {
                                return <option>{item}</option>
                            })}                            
                        </select>
                    </div>

                    <div className="flex flex-row items-center gap-2 mt-[1rem]">
                        <p className="text-[17px] font-bold text-[#78807C]">Qty:</p>
                        <select className="w-[40px] h-[30px] p-1 text-[16px] text-[#545460] border-[1px] border-solid border-[#8C8D8C] rounded-[.5rem] cursor-pointer outline-none hover:bg-[#EBEBEB]">                            
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>

                    <p className="text-[17px] font-bold text-[#78807C] mt-[1rem]">Attributes:</p>
                    <ul style={{listStyleType : "disc"}} className="text-[17px] text-[#545460] ml-[1.5rem]">
                        {dressAttributes.map(item => {
                            return <li>{item}</li>
                        })}
                        {/* <li>65% Rayon, 35% Polyester</li>
                        <li>Machine Wash</li>
                        <li>Pull On closur</li>
                        <li>65% Rayon, 35% Polyester</li>
                        <li>Machine Wash</li>
                        <li>Pull On closur</li> */}
                    </ul>

                    <button className="w-[200px] h-[33px] mt-[1rem] text-[20px] text-white font-[AmazonLight] bg-[#285E76] rounded-[1rem]">Add to cart</button>

                </div>
            </div>

        </div>
    )
}

export default ProductPage