import React from "react";
import ClaudeRecipe from "./ClaudeRecipe"
import List from "./IngredientsList"
import { getRecipeFromMistral } from "../ai"


export default function Main() {
    const [ingredients, setIngredients] = React.useState(["rice", "ground beef", "tomato", "spices"])
    
    
    function submitForm(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredient => [...prevIngredient, newIngredient])
    }

   
    const [recipe, setRecipe] = React.useState("")

    async function getRecipe() {
      const generatedRecipe =  await getRecipeFromMistral(ingredients)
      setRecipe(generatedRecipe)
    }

    
    return (
        <main>
            <form className="add-ingredient-form" action={submitForm}>
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button type="submit">Add ingredient</button>
            </form>
            {ingredients.length > 0 && <List ingredients={ingredients} handleClick={getRecipe}/>}
            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}