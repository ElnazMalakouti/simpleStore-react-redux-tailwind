import { useLoaderData  } from "react-router-dom"

export const loader = async ({params})=>{
    return params.dressName
}

const DressPage = ()=> {
    const loaderData = useLoaderData()

    return(
        <></>
    )
}

export default DressPage