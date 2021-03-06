import styled from "styled-components";



export const Div = styled.div`
    display: block;
    padding: 15px;
    background: #D0D0D0;
    width: 35vw;
    @media (max-width: 768px){
        width: 50vw;
    };
    @media (max-width: 368px){
        width: 80vw;
    };

    border-radius: 50px;
    box-shadow: 0px -12px #01C77F;
    text-align: center;

    .button {
        @import url('https://fonts.googleapis.com/css2?family=Oxygen&display=swap');
        font-family: 'Oxygen', sans-serif;
        font-size: 1.25em;
        padding: 0.5em 1em;
    }

    .button.cad{
        
    }
    .button.log{
        padding: 0.5em 2em;
    }
`

export const Input = styled.input`
    @import url('https://fonts.googleapis.com/css2?family=Oxygen&display=swap');
    font-family: 'Oxygen', Century Gothic, sans-serif;
    margin: 20px 0px 10px 0px;
    width: 30vw;
    height: 29px;
    text-align: center;
    border: 0px;
    border-radius: 50px;
    transition: 0.25s;

    &:focus{
        background: #129979;
        color: white;
        font-weight: bold;
    }

    @media (max-width: 905px) {
        width: 25vw;
    }

    @media (max-width: 768px) {
        width: 40vw;
    }

    @media (max-width: 368px){
        width: 75vw;
    };
`

export const Tittle = styled.h2`
    @import url('https://fonts.googleapis.com/css2?family=Oxygen&display=swap');
    font-family: 'Oxygen', sans-serif;
    font-size: 1.5rem;
    color: #129979;

    @media (max-width: 889px) {
        font-size: 14px;
    }
`

export const P = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Oxygen&display=swap');
    font-family: 'Oxygen', sans-serif;
    font-size: 1rem;
`

export const DivBottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.5em;



`