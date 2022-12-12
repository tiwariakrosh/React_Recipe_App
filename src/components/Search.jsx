import React, { useState } from 'react'
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


function Search() {

    const [input, setInput] = useState("");

    const navigate = useNavigate();



    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input)
    };

    return (
        <FormStyle onSubmit={submitHandler}>
            <FaSearch />
            <input type='text' onChange={(e) => setInput(e.target.value)} value={input} placeholder='Search Recipe' />
        </FormStyle>
    )
}

const FormStyle = styled.form`
margin: 0 20rem;
position: relative;
width: 100%;
margin: 30px auto;

input{
    border: none;
    background: linear-gradient(34deg, #494949, #313131);
    font-size: 1rem;
    color: #fff;
    padding: 1rem 3rem;
    border: none;
    border-radius: .6rem;
    outline: none;
    width: 100%;
}
svg{
    position: absolute;
    font-size: 1.5rem;
    color: #ddd;
top: 30%;
left: 2%;
transform: translate(-30%, 2%);
}
`;

export default Search