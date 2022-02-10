import React, {useState, useContext} from 'react';
import styled, {ThemeContext} from 'styled-components';
import {Link , useLocation} from 'react-router-dom';

const HeaderWrapper = styled.header`
    height: 60px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    padding: 0 16px;
    position: fixed;
    top: 0;
    background-image: linear-gradient(to right, ${p => p.theme.primaryColor}, ${p => p.theme.secondaryColor});
    border-bottom: 3px solid ${p => p.theme.secondaryColor};
`;


export function Header(){
    const {pathname} = useLocation();

    return (
        <HeaderWrapper>
            <Link to="/" isActive={pathname === '/'}>
                    Home
            </Link>
            <Link to="/login" isActive={pathname === '/login'}>
                    Login
            </Link>
        </HeaderWrapper>
    )
}