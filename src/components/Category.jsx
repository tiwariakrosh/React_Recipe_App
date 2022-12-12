import React from 'react'
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import { BsFillHouseFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Category() {
    return (
        <List>
            <SLink to={'/'}>
                <BsFillHouseFill />
                <h4>Home</h4>
            </SLink>
            <SLink to={'/cuisine/Italian'}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </SLink>
            <SLink to={'/cuisine/American'}>
                <FaHamburger />
                <h4>American</h4>
            </SLink>
            <SLink to={'/cuisine/Thai'}>
                <GiNoodles />
                <h4>Thai</h4>
            </SLink>
            <SLink to={'/cuisine/Japanese'}>
                <GiChopsticks />
                <h4>Japanese</h4>
            </SLink>
        </List>
    )
}

const List = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
`;

const SLink = styled(NavLink)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 50%;
text-decoration: none;
font-size: 14px;
background: linear-gradient(45deg, #494949, #313131);
color: #fff;
height: 6rem;
width: 6rem;
cursor:pointer;
transition: all 0.4s ease;

h4{
    font-size: .8rem;
    color: #fff;
    margin-top: 7px;
}

svg{
    font-size: 1.5rem
}
&.active{
    background: linear-gradient(to right, #f27221, #e94057)
}
`;