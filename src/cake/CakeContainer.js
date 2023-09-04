import React from "react";
import Cake from "./Cake.js";
import CakeForm from "./CakeForm.js";


// const originalListOfCakes = [
// 	{
// 		cakeName: "Victoria Sponge",
// 		ingredients: [
// 			"eggs",
// 			"butter",
// 			"sugar",
// 			"self-raising flour",
// 			"baking powder",
// 			"milk"
// 		],
// 		price: 5,
// 		rating: 5
// 	},
// 	{
// 		cakeName: "Tea Loaf",
// 		ingredients: [
// 			"eggs",
// 			"oil",
// 			"dried fruit",
// 			"sugar",
// 			"self-raising flour",
// 			"strong tea",
// 		],
// 		price: 2,
// 		rating: 3
// 	},
// 	{
// 		cakeName: "Carrot Cake",
// 		ingredients: [
// 			"carrots",
// 			"walnuts",
// 			"oil",
// 			"cream cheese",
// 			"flour",
// 			"sugar",
// 		],
// 		price: 8,
// 		rating: 5
// 	} 
// ];

const CakeContainer = () => {
	const [listOfCakes, setListOfCakes] = React.useState([]);
  
	const addNewCake = (newCake) => {
	  const updatedListOfCakes = [...listOfCakes, newCake];
	  setListOfCakes(updatedListOfCakes);
	};
  
	return (
	  <>
		<CakeForm addNewCake={addNewCake} />
		{listOfCakes.map((cake, index) => (
		  <Cake key={index} cake={cake} />
		))}
	  </>
	);
  };

export default CakeContainer;