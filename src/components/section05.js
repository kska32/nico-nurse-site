import React from 'react';
import styled, {css} from "styled-components";
import {IntersectBox} from './section01';
import {Titles, Para} from './section02';
import {FlexCenter, ButtonSquare, ButtonRound, IntersectHover} from './section03';
import {ButtonRoundEx1} from "./section04";


const Wrapper = styled.div`
    position: relative;
    width: 100%;
    background-color: #faf8ef;
    background-position: center top;
    background-size: 130%;
    min-height: 493px;

    ${FlexCenter}
    flex-flow: row wrap;
`;

const Content = styled.div`
    position: relative;
    max-width: 1200px;
    height: 435.88px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    >div{
        ${IntersectHover}
    }

`;


const TitlesEx = styled(Titles)`
    text-align: center;
    max-height: 120px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 2.4rem;
    
    &:after{
        position: relative;
    }
`;

const PhoneNumber = styled.div`
    color: #61c4e1;
    font-size: 3rem;
    line-height: 2.85rem;
    font-weight: 600;
    >small{
        font-size: 1.5rem;
        font-weight: 400;
    }
`;

const ButtonRoundEx1Nw = styled(ButtonRoundEx1)`
    margin-top: 1.2rem;
    margin-bottom: 0rem;
`;

const ButtonRoundEx2Nw = styled(ButtonRoundEx1Nw)`
    margin-top: 1.2rem;

    background-color: #fff;
    color: #555;

    font-weight: 400;
`;


export default function Section05(props){
    const [visible, setVisible] = React.useState(false);

    return <Wrapper>
        <IntersectBox visibleCallback={(e)=>{setVisible(true)}}>
            <Content visible={visible}>
                <TitlesEx text1={"Contact"}  text2={"お問い合わせ"} />
                <PhoneNumber>
                    <small>Tel.</small><span>03-6906-8941</span>
                </PhoneNumber>
                <PhoneNumber>
                    <small>Fax.</small><span>03-6906-8942</span>
                </PhoneNumber>
                <ButtonRoundEx1Nw>
                    メールで問い合わせる
                </ButtonRoundEx1Nw>
                <ButtonRoundEx2Nw>
                    訪問看護サービス依頼書
                </ButtonRoundEx2Nw>
            </Content>
        </IntersectBox>
    </Wrapper>
}