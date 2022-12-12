import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';

const RECIPE_APP_API_KEY = '035a4cf08ceb448c88df471079b4552a';


function Popular() {

    const [popular, setPopular] = useState([])

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {

        const check = localStorage.getItem('popular');

        if (check) {
            setPopular(JSON.parse(check));
        } else {
            const api = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${RECIPE_APP_API_KEY}&number=10`
            );
            const data = await api.json();
            localStorage.setItem('popular', JSON.stringify(data.recipes));
            setPopular(data.recipes);
            console.log(data.recipes);
        }
    };
    return (
        <div>
            <Wrapper>
                <h3>Popular Picks</h3>
                <Splide options={{
                    perPage: 4,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: '2rem'
                }}>
                    {popular.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <Card>
                                    <Link to={'/recipe' + recipe.id}>
                                        <p>{recipe.title}</p>
                                        <img src={recipe.image} alt={recipe.title} />
                                        <Gradient />
                                    </Link>
                                </Card>
                            </SplideSlide>
                        );
                    })};
                </Splide>
            </Wrapper>
        </div>
    );
}

const Wrapper = styled.div`
margin: 4rem 0rem;
padding: 2rem;
`;

const Card = styled.div`
min-height: 250px;
border-radius: 1rem;
overflow: hidden;
background-color: #fafafa;
margin-bottom: 20px;

img{
    border-radius: 1rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: #fff;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1.1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-item: center;
}

`;

const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0, 0, 0,0), rgba(0,0,0.0.5))
`;


export default Popular;