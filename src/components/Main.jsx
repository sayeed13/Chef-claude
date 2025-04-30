import React from "react";
import ClaudeRecipe from "./ClaudeRecipe"
import List from "./IngredientsList"


export default function Main() {
    const [ingredients, setIngredients] = React.useState(["pasta", "ground beef", "tomato paste", "tomato"])
    
    
    function submitForm(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredient => [...prevIngredient, newIngredient])
    }

   
    const [recipeShown, setRecipeShown] = React.useState(false)

    function getRecipe() {
        setRecipeShown(prevRecipe => !prevRecipe)
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
            {recipeShown && <ClaudeRecipe />}
        </main>
    )
}