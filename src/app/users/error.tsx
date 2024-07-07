"use client"
import { useEffect } from "react"

const error = ({ error }: { error: Error }) => {
    useEffect(()=> {
        console.log(error.message);
        
    },[error])
  return (
    <div>error: {error.message}</div>
  )
}

export default error