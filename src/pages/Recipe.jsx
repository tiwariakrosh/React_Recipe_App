import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom';

const RECIPE_APP_API_KEY = '035a4cf08ceb448c88df471079b4552a';


function Recipe() {
    let params = useParams();
    const [details, setDetails] = useState();
    const [activeTab, setActiveTab] = useState("instructions");


    const fetchDetails = async () => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${RECIPE_APP_API_KEY}`
        );
        const detailData = await data.json();
        setDetails(detailData);
        console.log(detailData);
    };

    // console.log(details);

    useEffect(() => {
        fetchDetails();
    }, [params.name]);

    return (
        <DetailWraper>
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt={details.title} />
            </div>
            <Info>
                <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab("instructions")}>Instructions</Button>
                <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab("ingredients")}>Ingredients</Button>
                {activeTab === 'instructions' && (
                    <div>
                        <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
                        <hr />
                        <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
                        <hr />
                        <p dangerouslySetInnerHTML={{ __html: details.ingredients }}></p>
                    </div>
                )}
                {activeTab === 'ingredients' && (
                    <ul>
                        {details.extendedIngredients.map((ingredient) => {
                            return (
                                <li key={ingredient.id}>{ingredient.original}</li>
                            )
                        })}
                    </ul>
                )}

            </Info>
        </DetailWraper>
    );
}

const DetailWraper = styled.div`
    margin-top: 5rem;
    margin-bottom: 5rem;
    display: flex;

    .active {
    background: linear-gradient(45deg, #494949, #313131);
    color: #fff;
}

    h2{
    margin-bottom: 1rem;
    }
    li{
        font-size: 1.2rem;
        line-height: 2rem;
    }
    ul{
        margin-top: 2rem;
    }
`;

const Button = styled.button`
padding: 14px 25px;
color: #323232;
background-color: #fff;
border: 2px solid #1b1b1b;
margin-right: 2rem;
font-weight: 600;
margin-bottom: 2rem;

.active {
    background: linear-gradient(45deg, #494949, #313131);
    color: #fff;
}
`;

const Info = styled.div`  
margin-left: 2rem;
`;

export default Recipe;
