import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/IngredientRecommendation.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import {useState, useEffect} from 'react'
import Link from 'next/link'
//useEffect may not even be necessary (not sure yet) i'm not sure if i need to use useEffect
//in order to fetch data from an API or if i can just do this in normal functions

export default function IngredientRecommendation({ data }) {
  const[inputText, setText] = useState("");
  const [ingredients, setIngredient] = useState([]);

  function handleChange(event) {
    //console.log(event.target.value);
    setText(event.target.value);
  }

  function handleClick(event) {
    //the below isn't working... we need to bind the button to the text input field
    //console.log(inputText);
    setIngredient([...ingredients, inputText]);
    setText("");
    //console.log(ingredients);
  }

  function handleDelete(i) {
    //for some reason, when i add a parameter, the onClick function triggers onChange ?!?!
    console.log(i);
    if (ingredients.length == 1) {
        setIngredient([]);
    }
    else {
        let newIngredients = ingredients;
        newIngredients.splice(i,1);
        console.log(newIngredients);
        setIngredient([...newIngredients]);
        //console.log(ingredients);
    }
    //pop function does not work?? 
  }

  return (
    <>
      <Head>
        <title>ReciMend</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/*{
            useEffect(() => {
                console.log(data);
            }, [])
        }*/}
        <div className="row" id={styles.all}>
            <div className="col-4" id={styles.left}>
                <h1 id={styles.title}>ReciMender</h1>
                <p id={styles.description}>Enter the ingredients you have below, and then click generate recipes.</p>
                {/* if we wanted to use a form instead of a div for the form elements, we would have to
                use preventDefault on the click of the button */}
                <div className="text-center">
                    <input type="text" value={inputText} onChange={handleChange} className="form-control" placeholder="Input ingredients here..." id={styles.ingredientsInput} />
                    <button onClick={handleClick} id={styles.addButton} className="btn btn-dark m-1">Add Ingredient</button>
                </div>
                <div className="exampleCards d-flex justify-content-center">
                    <div className="card" id={styles.card}>
                        <img src="https://spoonacular.com/cdn/ingredients_500x500/apple.jpg" alt="apple"></img>
                        <div className="card-body">
                            <h5 className="card-title">Apple</h5>
                            <p className="card-text">Apples are delicious!</p>
                        </div>
                    </div>
                    <div className="card" id={styles.card}>
                        <img src="https://spoonacular.com/cdn/ingredients_500x500/pear.jpg" alt="pear"></img>
                        <div className="card-body">
                            <h5 className="card-title">Pear</h5>
                            <p className="card-text">Pears are delicious!</p>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <Link href={"/ingredientRecommendation/" + ingredients.map((x, index) => ingredients[index])} passhref>
                        <button className="btn btn-dark">View Recipes</button>
                    </Link>
                </div>
            </div>
            <div className="col-8 d-flex flex-wrap" id={styles.right}>
                {
                    ingredients.map((x, index) => <div className="card" key={x} id={styles.card}>
                    <img src={"https://spoonacular.com/cdn/ingredients_500x500/" + x + ".jpg"} alt={x}></img>
                    <div className="card-body">
                        <h5 className="card-title">{x}</h5>
                    </div>
                    <button className="btn btn-dark" onClick={() => handleDelete(index)}>Delete</button>
                </div>)
                }
            </div>
        </div>
        
      </main>
    </>
  )
}