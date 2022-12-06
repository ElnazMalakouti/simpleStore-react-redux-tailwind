import { createSlice } from "@reduxjs/toolkit";

const init = {
    Products : [
        {
            dressId : 1,
            dressImage : "pics/ALEX-EVENING.png",
            dressName : "ALEX EVENING",
            dressScore: 4.5,
            dressDescription : "Women's Tea Length Sequin Mock Dress (Petite and Regular Sizes)",
            dressSizes : ["XL" , "XXL"],
            dressIsFavorite : false,
            dressPrice : 185
        },
        {
            dressId : 2,
            dressImage : "pics/CHICCLOTH.png",
            dressName : "CHICCLOTH",
            dressScore: 4,
            dressDescription : "Women's Ruffled Sleeves V Neck Midi Formal Party Dress Sheath Pencil Cocktail Dresses",
            dressSizes : ["L"],
            dressIsFavorite : false,
            dressPrice : 19
        },
        {
            dressId : 3,
            dressImage : "pics/DIRASS.png",
            dressName : "DIRASS",
            dressScore: 4.5,
            dressDescription : "Women's Elegant Velvet Long Sleeve Wrap V Neck Ruched Bodycon Cocktail Party Maxi Dress",
            dressSizes : ["XL"],
            dressIsFavorite : false,
            dressPrice : 62
        },
        {
            dressId : 4,
            dressImage : "pics/GRACE.png",
            dressName : "GRACE",
            dressScore: 5,
            dressDescription : "Women's High Neck Split Bodycon Mermaid Evening Cocktail Long Dress",
            dressSizes : ["L" , "XL" , "XXL"],
            dressIsFavorite : false,
            dressPrice : 58
        },
        {
            dressId : 5,
            dressImage : "pics/GUBERRY.png",
            dressName : "GUBERRY",
            dressScore: 3.5,
            dressDescription : "Womens Wrap V Neck Long Sleeve Velvet Bodycon Ruched Cocktail Party Dress",
            dressSizes : ["XL"],
            dressIsFavorite : false,
            dressPrice : 44
        },
        {
            dressId : 6,
            dressImage : "pics/HANNAH-ZONE.png",
            dressName : "HANNAH ZONE",
            dressScore: 4.5,
            dressDescription : "Women's Vintage Ruffle Sleeve V-Neck Bodycon Evening Party Cocktail Pencil Sheath Dress",
            dressSizes : ["XXL"],
            dressIsFavorite : false,
            dressPrice : 39
        },
        {
            dressId : 7,
            dressImage : "pics/KNITEE.png",
            dressName : "KNITEE",
            dressScore: 5,
            dressDescription : "Women's One Shoulder Sleeveless Cutout Ruched Slit Midi Bodycon Casual Cocktail Party Wrap Dress",
            dressSizes : ["L"],
            dressIsFavorite : false,
            dressPrice : 40
        },
        {
            dressId : 8,
            dressImage : "pics/KORMEI.png",
            dressName : "KORMEI",
            dressScore: 3,
            dressDescription : "Womens Short Sleeve Floral High Low V-Neck Flowy Party Long Maxi Dress",
            dressSizes : ["S" , "L"],
            dressIsFavorite : false,
            dressPrice : 36
        },
        {
            dressId : 9,
            dressImage : "pics/LYANER.png",
            dressName : "LYANER",
            dressScore: 3.5,
            dressDescription : "Women's Satin Ruffle One Shoulder Ruched Split Wrap Front Cocktail Midi Bodycon Dress",
            dressSizes : ["S" , "XL"],
            dressIsFavorite : false,
            dressPrice : 35
        },
        {
            dressId : 10,
            dressImage : "pics/OTEN.png",
            dressName : "OTEN",
            dressScore: 4,
            dressDescription : "Womens Deep V Neck Ruffle Sleeve Sheath Casual Cocktail Party Work Faux Wrap Dress",
            dressSizes : ["XL" , "XXL"],
            dressIsFavorite : false,
            dressPrice : 23
        },
        {
            dressId : 11,
            dressImage : "pics/OWIN.png",
            dressName : "OWIN",
            dressScore: 4.5,
            dressDescription : "Women's 3/4 Sleeves Deep V Neck Casual Party Cocktail Dresses Waist Tie Ruffle Hem Work Wrap",
            dressSizes : ["L" , "XL" , "XXL"],
            dressIsFavorite : false,
            dressPrice : 25
        },
        {
            dressId : 12,
            dressImage : "pics/VFSHOW.png",
            dressName : "VFSHOW",
            dressScore: 4.5,
            dressDescription : "Womens Off Shoulder High Slit Formal Evening Party Bodycon Maxi Long Dress",
            dressSizes : ["S" , "L" , "XL"],
            dressIsFavorite : false,
            dressPrice : 59
        },
        {
            dressId : 13,
            dressImage : "pics/WOOSEA.png",
            dressName : "WOOSEA",
            dressScore: 4,
            dressDescription : "KARIN Women's Pencil Work Dresses Long Sleeve V Neck Bodycon Business Dress Elegant Cocktail Party",
            dressSizes : ["S" , "L" , "XL"],
            dressIsFavorite : false,
            dressPrice : 35
        },
        {
            dressId : 14,
            dressImage : "pics/XXXITICAT.png",
            dressName : "XXXITICAT",
            dressScore: 4,
            dressDescription : "Women's Sleeveless Spaghetti Strap Satin Dress Cocktail Beach Evening Party Cowl Neck Dot",
            dressSizes : ["S"],
            dressIsFavorite : false,
            dressPrice : 27
        }
    ]
}


const ProductsReducer = createSlice({
    name : "ProductsReducer",
    initialState : init,
    reducers : {
        add : (state,action) => {
            console.log("action set")
        }
    }
})

export const {add} = ProductsReducer.actions
export default ProductsReducer.reducer