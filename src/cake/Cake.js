const Cake = ({ cake }) => {

  return (
    <>
      <h2>{cake.cakeName}</h2>
      <p>Price: ${cake.price}</p>
      <p>Rating: {cake.rating} stars</p>
      <h3>Ingredients:</h3>
      <ul>
        {cake.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </>
  )
}

export default Cake;