
const Details = async() => {
    const response = await fetch('http://localhost:3001/products');
    console.log('details page ');
    
    
  return (
    <div>Details</div>
  )
}

export default Details