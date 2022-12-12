import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const RECIPE_APP_API_KEY = '035a4cf08ceb448c88df471079b4552a';

function Cuisine() {

    const [cuisine, setCuisine] = useState([]);

    let params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${RECIPE_APP_API_KEY}&cuisine=${name}`
        );
        console.log('Check', data);
        const recipes = await data.json();
        setCuisine(recipes.results);
    };

    useEffect(() => {
        getCuisine(params.type);
    }, [params.type]);

    return (
        <Grid
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .5 }}
        >
            {cuisine?.map((items) => {
                console.log(items)
                return (
                    <Card key={items.id} >
                        <Link to={'/recipe' + items.id} >
                            <img src={items.image} alt={items.title} />
                            <h4>{items.title}</h4>
                        </Link>
                    </Card>
                );
            })}
        </Grid >
    );
};

const Grid = styled(motion.div)`
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

export default Cuisine;