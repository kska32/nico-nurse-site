import React from 'react';
import styled, {css} from "styled-components";
import {IntersectBox} from './section01';
import {Titles, Para} from './section02';
import homeAboutImg2 from "../images/home_service_bg2.jpg";
import homeServiceImg from "../images/home_service_1.png";


export const FlexCenter = css`
        display: flex;
        justify-content: center;
        align-items: center;
    `;

export const IntersectHover = css`
    transition: all 1.2s;
    opacity: 0;
    transform: translateY(120px);

    ${
        p=>p.visible && `
            opacity: 1;
            transform: translateY(0px);
        `
    }
`;


const Wrapper = styled.div`
    position: relative;
    width: 100%;
    background: transparent url(${homeAboutImg2}) no-repeat center;
    background-size: 135%;
    padding-top: 38%;
    padding-bottom: 87px;
    margin-bottom: 60px;
    ${FlexCenter}
    flex-flow: row wrap;
`;

const Content = styled.div`
    position: relative;
    width: 1170px;
    height: 503px;
    display: flex;
    flex-flow: row nowrap;

    >div{
        display: flex;
        flex-flow: column nowrap;
        flex: 1;
       
        &:nth-of-type(1){
            ${IntersectHover}
        }

        &:nth-of-type(2){
            ${FlexCenter}
            align-items: flex-start;
            justify-content: flex-end;
        
            >img{
                position: absolute;
            }
        }

    }


`;


export const ButtonSquare = styled.div`
    position: relative;
    width: 360px;
    height: 45px;
    background-color: transparent;
    color: #4d4a4a;
    letter-spacing: 0.12rem;
    font-size: 1.2rem;
    text-decoration: none;
    ${FlexCenter}
    margin-bottom: 0.8rem;

    ${
        p=>p.bgColor && `
            background-color: ${p.bgColor};
        `
    }
`;


export const ButtonRound = styled.div`
    position: relative;
    width: 360px;
    height: 56px;

    border: thin solid #61c4e1;
    color: #fff;
    background-color: #61c4e1;


    ${FlexCenter}

    border-radius: 28px;
    margin: 1.25rem 0px;
    transition: all 0.18s;
    cursor: pointer;

    &:hover{
        color: #61c4e1;
        background-color: #fff;
        border-color: #61c4e1;
    
    }
`;

export const ParaEx = styled(Para)`
    margin-bottom: 2rem;
    position: relative;
    width: 82%;


`;


export default function Section03(props){
    const [visible, setVisible] = React.useState(false);

    return <Wrapper>
        <IntersectBox visibleCallback={(e)=>{setVisible(true)}}>
            <Content visible={visible}>
                <div>
                    <Titles text1={"Service"} text2={"サービス内容"} />
                    <ParaEx>nicoでは訪問看護・訪問リハビリテーション事業を展開しています。</ParaEx>
                    <ButtonSquare bgColor={"#d4eef7"}>訪問看護</ButtonSquare>
                    <ButtonSquare bgColor={"#e3f6d1"}>リハビリテーション</ButtonSquare>
                    <ButtonSquare bgColor={"#fffbd6"}>自費サービス</ButtonSquare>
                    <ButtonRound>サービス内容はこちら</ButtonRound>
                </div>
                <div>
                    <img src={homeServiceImg} />
                </div>
            </Content>
        </IntersectBox>
    </Wrapper>
}