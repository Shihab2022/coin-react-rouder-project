import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const useDetails =()=>{
    const {id}=useParams()
    const [coin,setCoin]=useState([])
useEffect(()=>{

const url=`https://api.coingecko.com/api/v3/coins/${id}`

fetch(url)
.then(res=>res.json())
.then(data =>setCoin(data))



},[id])

return [coin,setCoin]
    
}

export default useDetails