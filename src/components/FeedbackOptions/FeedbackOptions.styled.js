import styled from "styled-components";

export const ListButtons = styled.ul`
display: flex;
gap: 20px;
list-style: none;
margin-top: 10px;
margin-bottom: 10px;

 padding: 0;

`;

export const ButtonFeedback = styled.button`
    padding: 5px 20px;
    cursor: pointer;
    font-family: inherit;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    text-align: center;
    letter-spacing: 0.04em;
    color: inherit;
    border: 1px solid gray;
    border-radius: 4px;
    background-color: #f4f4fd;

    &:hover, :focus 
    {
    color: #4d5ae5;
    background-color: white;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);}
`;