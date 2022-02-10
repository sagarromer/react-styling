import React, {useState, useContext} from 'react';
import styled, {ThemeContext} from 'styled-components';
import {Link as ReactRouterDomLink, useLocation} from 'react-router-dom';

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
const Menu = styled.nav`
    display: ${p => p.open ? 'block' : 'none'};
    font-family: 'Open Sans';
    position: absolute;
    width: 100%;
    top: 60px;
    left: 0;
    padding: 8px;
    box-sizing: border-box;
    border-bottom: 3px solid ${p => p.theme.secondaryColor};
    background: ${p => p.theme.bodyBackgroundColor};

    @media(min-width: 768px){
        display: flex;
        background: none;
        left: initial;
        top: initial;
        margin: auto 0 auto auto;
        border-bottom: none;
        position: relative;
        width: initial;
    }
`;

const Link = ({isActive, children, ...props}) => {
    return (
        <ReactRouterDomLink {...props}>
            {children}
        </ReactRouterDomLink>
    );
};
const StyledLink = styled(Link)`
    padding: 4px 8px;
    display: block;
    text-align: center;
    box-sizing: border-box;
    margin: auto 0;
    font-weight: ${p => p.isActive ? 'bold' : 'normal'};
    color: ${p => p.theme.bodyFontColor};
`

export function Header(){
    const {pathname} = useLocation();
    const [menuOpen, setMenuOpen] = useState(true);


    return (
        <HeaderWrapper>
            <Menu open={menuOpen}>
            <Link to="/" isActive={pathname === '/'}>
                    Home
            </Link>
            <Link to="/login" isActive={pathname === '/login'}>
                    Login
            </Link>
            </Menu>
        </HeaderWrapper>
    )
}