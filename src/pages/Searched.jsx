import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

const RECIPE_APP_API_KEY = '035a4cf08ceb448c88df471079b4552a';

function Searched() {
    const [searchedRecipes, setSearchedRecipes] = useState([]);

    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(`
        https://api.spoonacular.com/recipes/complexSearch?apiKey=${RECIPE_APP_API_KEY}&query=${name}
        `)
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
    };

    useEffect(() => {
        getSearched(params.search);
    }, [params.search]);

    return (
        <Grid>
            {searchedRecipes.map((itemData) => {
                return (
                    <Card key={itemData.id}>
                        <Link to={'/recipe' + itemData.id}>
                            <img src={itemData.image} alt={itemData.title} />
                            <h4>{itemData.title}</h4>
                        </Link>
                    </Card>
                )
            })}
        </Grid >
    )
}

const Grid = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 2rem;
margin: 20px auto;
`;

const Card = styled.div`
min-height: 250px;
min-width: 250px;
max-width: 280px;

img{
    width: 100%;
    max-width: 300px;
    border-radius: 1rem;
}

a{
    text-decoration: none;
}
h4{
    text-align: center;
    padding: 1rem;
}
`;

export default Searched;