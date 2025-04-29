import React from "react";


export default function Main() {
    const [ingredients, setIngredients] = React.useState([])
    
    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))
    
    
    function submitForm(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredient => [...prevIngredient, newIngredient])
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
            {ingredients.length > 0 && <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
                {ingredients.length > 3 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>}
            </section>}
        </main>
    )
}