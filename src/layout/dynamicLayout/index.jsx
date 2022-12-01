import { useLoaderData } from "react-router-dom"

export const loader = async ({params})=>{
    return params.number
}

const DynamicLayout = () => {

    const loaderData = useLoaderData()

    return(
        <p style={{color:"red" , fontSize : "80px"}}>{loaderData}</p>
    )
}

export default DynamicLayout