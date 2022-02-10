import React from "react";
import styled, { css } from "styled-components";

const Card = () => {
    return (
        <CardWrapper>
        <CardHeader>
          <CardHeading>Sign in</CardHeading>
        </CardHeader>

        <CardBody>
          <CardFieldset>
            <CardInput placeholder="Username" type="text" required />
          </CardFieldset>

          <CardFieldset>
            <CardInput placeholder="E-mail" type="text" required />
          </CardFieldset>

          <CardFieldset>
            <CardInput placeholder="Password" type="password" required />
            <CardIcon className="fa fa-eye" eye small />
          </CardFieldset>

          <CardFieldset>
            <CardOptionsNote>Or sign up with</CardOptionsNote>

            <CardOptions>
              <CardOptionsItem>
                <CardIcon className="fab fa-google" big />
              </CardOptionsItem>

              <CardOptionsItem>
                <CardIcon className="fab fa-twitter" big />
              </CardOptionsItem>

              <CardOptionsItem>
                <CardIcon className="fab fa-facebook" big />
              </CardOptionsItem>
            </CardOptions>
          </CardFieldset>

          <CardFieldset>
            <CardButton type="button">Sign Up</CardButton>
          </CardFieldset>

          <CardFieldset>
            <CardLink>I already have an account</CardLink>
          </CardFieldset>
        </CardBody>
        </CardWrapper>
    )
}

export default Card

const CardWrapper = styled.div`
    overflow: hidden;
    padding: 0 0 32px;
    margin: 48px auto 0;
    width: 300;
    font-family: 'Helvetica Neue', sans-serif;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
    border-radius: 5px;

`;

const CardHeader = styled.header`
    padding-top: 32px;
    padding-bottom: 32px;

`
const CardHeading = styled.h1`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`

const CardBody = styled.div`
    padding-right: 32px;
    padding-left: 32px;

`
const CardFieldset = styled.fieldset`
    position: relative;
    padding: 0;
    margin: 0;
    border: 0;

    & + & {
        margin-top: 24px;
    }

    &:nth-last-of-type(2){
        margin-top: 32px;
    }

    &:last-of-type {
        text-align: center;
    }


`;

const CardInput = styled.input`
    padding: 7px 0;
    width: 100%;
    font-family: inherit;
    font-size: 14px;
    border-top: 0;
    border-right: 0;
    border-bottom: 1px solid #ddd;
    border-left: 0;
    transition: border-bottom-color 0.25s ease-in;

    &:focus {
        
        border-bottom-color: #e5195f;
        outline: 0;
        
    }

`;


const CardIcon = styled.span`
    color: #666;
    cursor: pointer;
    opacity: .25;
    transition: opacity .25s ease-in;

    &:hover {
        opacity: .95;
    }

    ${props => props.big && css`
        font-size: 26px;
    `
    }

    ${props => props.eye && css`
        position: absolute;
        top: 8px;
        right: 0;
    `
    }
    ${props => props.small && css`
        font-size: 14px;
    `
    }

`;

const CardOptionsNote = styled.small`
    padding-top: 8px;
    display: block;
    width: 100%;
    font-size: 12px;
    text-align: center;
    text-transform: uppercase;
`


const CardOptions = styled.ul`
    padding: 0;
    margin: 16px 0 8px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    list-style-type: none;
`

const CardOptionsItem = styled.li`

    &:nth-of-type(n+2) {
        margin-left: 16px;
    }
`;


const CardButton = styled.button`
    display: block;
    width: 100%;
    padding: 12px 0;
    font-family: inherit;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    background-color: #e5195f;
    border: 0;
    border-radius: 35px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

    &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
    }

`;

export const CardLink = styled.a`

    display: inline-block;
    font-size: 12px;
    text-decoration: none;
    color: #aaa;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
    transition: color 0.25s ease-in;

    &:hover {
        color: #777;
    }

`

















