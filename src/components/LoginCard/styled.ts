import styled from "styled-components";



export const Div = styled.div`
    display: block;
    padding: 15px;
    background: #D0D0D0;
    width: 35vw;
    border-radius: 50px;
    box-shadow: 0px -12px #01C77F;
    text-align: center;

    .button {
        @import url('https://fonts.googleapis.com/css2?family=Oxygen&display=swap');
        font-family: 'Oxygen', sans-serif;
        display: block;
        margin-left: auto;
        margin-right: auto;
        padding: 10px 40px;
    }

    .button.cad{
        margin-bottom: 35px;
    }
    .button.log{
        margin-top: 30px;
    }
`

export const Input = styled.input`
    @import url('https://fonts.googleapis.com/css2?family=Oxygen&display=swap');
    font-family: 'Oxygen', sans-serif;
    margin: 20px 0px 10px 0px;
    width: 400px;
    height: 29px;
    text-align: center;
    border: 0px;
    border-radius: 50px;
`

export const Tittle = styled.h2`
    @import url('https://fonts.googleapis.com/css2?family=Oxygen&display=swap');
    font-family: 'Oxygen', sans-serif;
    font-size: 1.5rem;
    color: #129979;
`

export const P = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Oxygen&display=swap');
    font-family: 'Oxygen', sans-serif;
    font-size: 1rem
`
