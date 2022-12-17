import { createSlice } from "@reduxjs/toolkit";

const init = {
    Products: [
        {
            dressId: 1,
            dressImage: "pics/ALEX-EVENING.png",
            dressName: "ALEX EVENING ",
            dressScore: 4.5,
            dressDescription: "Women's Tea Length Sequin Mock Dress (Petite and Regular Sizes)",
            dressSizes: ["XL", "XXL"],
            dressColors: [
                {
                    id: 1,
                    name: "dark blue",
                    code:"#111F39"
                },
                {
                    id: 2,
                    name: "green",
                    code:"#07832E"
                },
            ],
            dressIsFavorite: false,
            dressPrice: 185,
            dressAttributes: [
                "Top Part:95% POLYESTER+5% SPANDEX;Bottom Part: 90% POLYESTER+10% SPANDEX",
                "Hand Wash Only",
                "Zipper closure",
                "Garments in different colors/patterns may use different materials,",
                "Notch V Neckline, Sleeveless, Patchwork Design, Two handy pockets.",
                "Hand Wash in cold water, Machine Wash gently, hang or line dry. [Do not tumble dry]"
            ]
        },
        {
            dressId: 2,
            dressImage: "pics/CHICCLOTH.png",
            dressName: "CHICCLOTH ",
            dressScore: 4,
            dressDescription: "Women's Ruffled Sleeves V Neck Midi Formal Party Dress Sheath Pencil Cocktail Dresses",
            dressSizes: ["L"],
            dressColors: [
                {
                    id: 1,
                    name: "gray",
                    code:"#A1A1A1"
                },
                {
                    id: 2,
                    name: "black",
                    code:"#000000"
                },
                {
                    id: 3,
                    name: "red",
                    code:"#EC0D0D"
                },
                {
                    id: 4,
                    name: "pink",
                    code:"#EC0DB9"
                },
            ],
            dressIsFavorite: false,
            dressPrice: 19,
            dressAttributes: [
                "65% Rayon, 35% Polyester",
                "Machine Wash",
                "Pull On closure",
                "If you are in between size,please size up.",
                "Design: Eyelashes lace,Slimming Sheath Style, Full Lace Short Midi Dress, Full Zip Back",
                "Size:S(US 2-4) / M(US 6-8) / L(US 10-12) / XL(US 14-16)"
            ]
        },
        {
            dressId: 3,
            dressImage: "pics/DIRASS.png",
            dressName: "DIRASS ",
            dressScore: 4.5,
            dressDescription: "Women's Elegant Velvet Long Sleeve Wrap V Neck Ruched Bodycon Cocktail Party Maxi Dress",
            dressSizes: ["XL"],
            dressColors: [
                {
                    id: 1,
                    name: "crimson",
                    code:"#4A0F20"
                },
                {
                    id: 2,
                    name: "yellow",
                    code:"#F8F405"
                },
                {
                    id: 2,
                    name: "black",
                    code:"#000000"
                },
            ],
            dressIsFavorite: false,
            dressPrice: 62,
            dressAttributes: [
                "95% Polyester, 5% Spandex",
                "Tie closure",
                "Machine Wash",
                "95%Polyester 5%Spandex, super softcomfy and stretchy, keeps you fitted in all the right places",
                "Elegant velvet, wrap v neck, long sleeve, ruch bodycon dress that hide belly fat, maxi dress.",
                "This dress can well meet your fashion needs in fall and winter, styling with high heels."
            ]
        },
        {
            dressId: 4,
            dressImage: "pics/GRACE.png",
            dressName: "GRACE ",
            dressScore: 5,
            dressDescription: "Women's High Neck Split Bodycon Mermaid Evening Cocktail Long Dress",
            dressSizes: ["L", "XL", "XXL"],
            dressColors: [
                {
                    id: 1,
                    name: "red",
                    code:"#C3001E"
                },
                {
                    id: 2,
                    name: "black",
                    code:"#000000"
                },
            ],
            dressIsFavorite: false,
            dressPrice: 58,
            dressAttributes: [
                "Imported",
                "Zipper closure",
                "Machine washable with cold water in a delicate cycle.",
                "This summer slimming mini dress is made of 95% Polyamide and 5% Spandex.",
                "Solid color, cottage core dress, mesh long lantern sleeves, elastic cuffs and shoulders.",
                "This elegant party dress is very form fitting, it will hug all of your curves."
            ]
        },
        {
            dressId: 5,
            dressImage: "pics/GUBERRY.png",
            dressName: "GUBERRY ",
            dressScore: 3.5,
            dressDescription: "Womens Wrap V Neck Long Sleeve Velvet Bodycon Ruched Cocktail Party Dress",
            dressSizes: ["XL"],
            dressColors: [
                {
                    id: 1,
                    name: "dark green",
                    code:"#0A3529"
                },                
            ],
            dressIsFavorite: false,
            dressPrice: 44,
            dressAttributes: [
                "65% Rayon, 35% Polyester",
                "Machine Wash",
                "Pull On closure",
                "If you are in between size,please size up.",
                "Design: Eyelashes lace,Slimming Sheath Style, Full Lace Short Midi Dress, Full Zip Back",
                "Size:S(US 2-4) / M(US 6-8) / L(US 10-12) / XL(US 14-16)"
            ]
        },
        {
            dressId: 6,
            dressImage: "pics/HANNAH-ZONE.png",
            dressName: "HANNAH ZONE ",
            dressScore: 4.5,
            dressDescription: "Women's Vintage Ruffle Sleeve V-Neck Bodycon Evening Party Cocktail Pencil Sheath Dress",
            dressSizes: ["XXL"],
            dressColors: [
                {
                    id: 1,
                    name: "green",
                    code:"#0B3A26"
                },
                {
                    id: 2,
                    name: "gray",
                    code:"#A1A1A1"
                },
                {
                    id: 3,
                    name: "black",
                    code:"#000000"
                },
                {
                    id: 4,
                    name: "red",
                    code:"#EC0D0D"
                },                
            ],
            dressIsFavorite: false,
            dressPrice: 39,
            dressAttributes: [
                "Imported",
                "Zipper closure",
                "Machine washable with cold water in a delicate cycle.",
                "This summer slimming mini dress is made of 95% Polyamide and 5% Spandex.",
                "Solid color, cottage core dress, mesh long lantern sleeves, elastic cuffs and shoulders.",
                "This elegant party dress is very form fitting, it will hug all of your curves."
            ]
        },
        {
            dressId: 7,
            dressImage: "pics/KNITEE.png",
            dressName: "KNITEE ",
            dressScore: 5,
            dressDescription: "Women's One Shoulder Sleeveless Cutout Ruched Slit Midi Bodycon Casual Cocktail Party Wrap Dress",
            dressSizes: ["L"],
            dressColors: [
                {
                    id: 1,
                    name: "gray",
                    code:"#A1A1A1"
                },
                {
                    id: 2,
                    name: "black",
                    code:"#000000"
                },
                {
                    id: 3,
                    name: "red",
                    code:"#EC0D0D"
                },
                {
                    id: 4,
                    name: "crimson",
                    code:"#4A0F20"
                },
            ],
            dressIsFavorite: false,
            dressPrice: 40,
            dressAttributes: [
                "If you are in between size, please size up",
                "Imported",
                "lining lining",
                "Polyester, LACE Fabric IS NOT Elasticity!!! but is soft.",
                "lovely eyelash lace, V-back with hidden zipper, Hit the waists perfectly.",
                "Round neck, fluttering short sleeve, or sleeveless, lined, above the knee."
            ]
        },
        {
            dressId: 8,
            dressImage: "pics/KORMEI.png",
            dressName: "KORMEI ",
            dressScore: 3,
            dressDescription: "Womens Short Sleeve Floral High Low V-Neck Flowy Party Long Maxi Dress",
            dressSizes: ["S", "L"],
            dressColors: [
                {
                    id: 1,
                    name: "black",
                    code:"#000000"
                },
            ],
            dressIsFavorite: false,
            dressPrice: 36,
            dressAttributes: [
                "65% Rayon, 35% Polyester",
                "Machine Wash",
                "Pull On closure",
                "If you are in between size,please size up.",
                "Design: Eyelashes lace,Slimming Sheath Style, Full Lace Short Midi Dress, Full Zip Back",
                "Size:S(US 2-4) / M(US 6-8) / L(US 10-12) / XL(US 14-16)"
            ]
        },
        {
            dressId: 9,
            dressImage: "pics/LYANER.png",
            dressName: "LYANER ",
            dressScore: 3.5,
            dressDescription: "Women's Satin Ruffle One Shoulder Ruched Split Wrap Front Cocktail Midi Bodycon Dress",
            dressSizes: ["S", "XL"],
            dressColors: [
                {
                    id: 1,
                    name: "light pink",
                    code:"#F2D9C1"
                },    
                {
                    id: 2,
                    name: "crimson",
                    code:"#4A0F20"
                },        
                {
                    id: 3,
                    name: "green",
                    code:"#0B3A26"
                },
            ],
            dressIsFavorite: false,
            dressPrice: 35,
            dressAttributes: [
                "Imported",
                "Zipper closure",
                "Machine washable with cold water in a delicate cycle.",
                "This summer slimming mini dress is made of 95% Polyamide and 5% Spandex.",
                "Solid color, cottage core dress, mesh long lantern sleeves, elastic cuffs and shoulders.",
                "This elegant party dress is very form fitting, it will hug all of your curves."
            ]
        },
        {
            dressId: 10,
            dressImage: "pics/OTEN.png",
            dressName: "OTEN ",
            dressScore: 4,
            dressDescription: "Womens Deep V Neck Ruffle Sleeve Sheath Casual Cocktail.",
            dressSizes: ["XL", "XXL"],
            dressColors: [
                {
                    id: 1,
                    name: "black",
                    code:"#000000"
                },
                {
                    id: 2,
                    name: "green",
                    code:"#0B3A26"
                },
                {
                    id: 3,
                    name: "gray",
                    code:"#A1A1A1"
                },

            ],
            dressIsFavorite: false,
            dressPrice: 23,
            dressAttributes: [
                "If you are in between size, please size up",
                "Imported",
                "lining lining",
                "Polyester, LACE Fabric IS NOT Elasticity!!! but is soft.",
                "lovely eyelash lace, V-back with hidden zipper, Hit the waists perfectly.",
                "Round neck, fluttering short sleeve, or sleeveless, lined, above the knee, Mid-thigh."
            ]
        },
        {
            dressId: 11,
            dressImage: "pics/OWIN.png",
            dressName: "OWIN ",
            dressScore: 4.5,
            dressDescription: "Women's 3/4 Sleeves Deep V Neck Casual Party Cocktail Dresses Waist Tie Ruffle Hem Work Wrap",
            dressSizes: ["L", "XL", "XXL"],
            dressColors: [
                {
                    id: 1,
                    name: "gray",
                    code:"#A1A1A1"
                },
                {
                    id: 2,
                    name: "black",
                    code:"#000000"
                },
                {
                    id: 3,
                    name: "red",
                    code:"#EC0D0D"
                },
                {
                    id: 4,
                    name: "crimson",
                    code:"#4A0F20"
                },
            ],
            dressIsFavorite: false,
            dressPrice: 25,
            dressAttributes: [
                "65% Rayon, 35% Polyester",
                "Machine Wash",
                "Pull On closure",
                "If you are in between size,please size up.",
                "Design: Eyelashes lace,Slimming Sheath Style, Full Lace Short Midi Dress, Full Zip Back",
                "Size:S(US 2-4) / M(US 6-8) / L(US 10-12) / XL(US 14-16)"
            ]
        },
        {
            dressId: 12,
            dressImage: "pics/VFSHOW.png",
            dressName: "VFSHOW ",
            dressScore: 4.5,
            dressDescription: "Womens Off Shoulder High Slit Formal Evening Party Bodycon Maxi Long Dress",
            dressSizes: ["S", "L", "XL"],
            dressColors: [
                {
                    id: 1,
                    name: "green",
                    code:"#13533B"
                },
            ],
            dressIsFavorite: false,
            dressPrice: 59,
            dressAttributes: [
                "If you are in between size, please size up",
                "Imported",
                "lining lining",
                "Polyester, LACE Fabric IS NOT Elasticity!!! but is soft.",
                "lovely eyelash lace, V-back with hidden zipper, Hit the waists perfectly",
                "Round neck, fluttering short sleeve, or sleeveless, lined, above the knee, Mid-thigh."
            ]
        },
    ]
}


const ProductsReducer = createSlice({
    name: "ProductsReducer",
    initialState: init,
    reducers: {
        add: (state, action) => {
            console.log("action set")
        }
    }
})

export const { add } = ProductsReducer.actions
export default ProductsReducer.reducer