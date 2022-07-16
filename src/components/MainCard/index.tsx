import React from "react";
import {
        Div,
        DivTop,
        DivImg,
        DivFigures,
        DivBottom,
        ImgFig,
        Number,
        Name,
        Img,

        } from './styled'
import Perfil from '../../assets/Image/PerfilElipse.svg';
import Lixo from '../../assets/Image/lixo.svg';
import Lapis from '../../assets/Image/lapis.svg';

interface Props {

}


class MainCard extends React.Component<Props>{
    constructor(Props:Props){
        super(Props)
    }

    render(): React.ReactNode {
        return (
            <>

                <Div>
                    <DivTop>
                        <DivImg>
                            <Img src={Perfil}/>
                        </DivImg>
                        <DivFigures>
                            <ImgFig src={Lapis}/>
                            <ImgFig src={Lixo}/>
                        </DivFigures>
                    </DivTop>
                    <DivBottom>
                        <Name>Alex Fernandes</Name>

                        <Number>(61)9999-9999</Number>
                    </DivBottom>
                </Div>
                
            </>
        )
    }

    
}

export default MainCard;