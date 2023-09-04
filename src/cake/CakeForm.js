import { useState } from "react";

const CakeForm = ({ addNewCake }) => {
    const [cakeName, setCakeName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const newCake = {
            cakeName,
            ingredients: ingredients.split(",").map((ingredient) => ingredient.trim()),
            price: parseFloat(price),
            rating: parseInt(rating),
        };

        addNewCake(newCake);

        setCakeName("");
        setIngredients("");
        setPrice("");
        setRating("");
    };
    
    return (
        <>
          <h2>Add Another Cake</h2>

          <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="cakeName"
                placeholder="Add new cake name"
                value={cakeName}
                onChange={(e) => setCakeName(e.target.value)}
              />

              <input
                type="text"
                name="ingredients"
                placeholder="Add new ingredients"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
              />
              
              <input
                type="number"
                name="price"
                placeholder="Set a price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />

              <input
                type="number"
                name="rating"
                placeholder="Give a rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
              />

            <button type="submit">Add Cake</button>

          </form>
        </>
    );
};

    export default CakeForm;
      