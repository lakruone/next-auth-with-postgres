import { ReactNode } from "react"

const layout = async({children} : { children: ReactNode}) => {
    const response = await fetch('http://localhost:3001/products');

    console.log('layout working');
    
  return (
    <>
        <h1>Layout</h1>
        <div>{children}</div>
    </>
  )
}

export default layout