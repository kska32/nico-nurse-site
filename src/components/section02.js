import React from 'react';
import styled from "styled-components";
import {IntersectBox} from './section01';
import homeAboutImg from "../images/home_about.jpg";

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    background: transparent url(${homeAboutImg}) no-repeat center;
    background-size: 120%;
    padding-top: 47.2%;

    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    *{
        line-height: 2.4rem;
    }

`;


const Content = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 25px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;

    >div{
        position: relative;
        width: 36%;

        opacity: 0;
        transform: translateY(120px);
        transition: all 1.2s ease;
    
        ${
            p=>p.visible && `
                opacity: 1;
                transform: translateY(0px);
            `
        }
    }
`;

export const Para = styled.p`
    color: #4d4a4a;
    font-size: 1.2rem;
`;


const TitleWrapper = styled.div`
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    margin-bottom: 2rem;

    >div{
        position:relative;
        margin-bottom: rem;
        font-size: 1.8rem;

        &:nth-of-type(1){
            font-family: 'Dancing Script', cursive;
            font-weight: 900;
            color: #61c4e1;
            letter-spacing: 0.3rem;
            margin-bottom: 0.6rem;
        }

        &:nth-of-type(2){
            color: #4d4a4a;
            margin-bottom: 2rem;
        }
    }

    &:after{
        content: '';
        background-image: -webkit-linear-gradient(0deg, #61c4e1 0%, #ffff93 100%);
        position: absolute;
        bottom: 0;
        left: 0;
        width: 7rem;
        height: 5px;
        border-radius: 2.5px;
    }

`;

export const Titles = ({text1= '', text2= '',  ...props}) =>{
    return <TitleWrapper {...props}>
        <div>{text1}</div>
        <div>{text2}</div>
    </TitleWrapper>
}

export default function Section02(props){
    const [visible, setVisible] = React.useState(false);

    return <Wrapper>
        <IntersectBox visibleCallback={(e)=>{setVisible(true)}}>
            <Content visible={visible}>
                <div>
                    <Titles text1={'About nico'} text2={'訪問看護ステーションnico'} />
                    <Para>
                        nicoでは、看護師がご自宅に訪問し看護ケアを行います。<br/>
                        病気や障害を持った方が住み慣れた環境で安心して暮らせるよう、日常生活の不安や介護方法についてのご相談なども、看護師が窓口となってサポートいたします。
                    </Para>
                    <Para>
                        リハビリでは、理学療法士等が心身の機能の維持回復を図り、ご自宅での日常生活を支援するために訪問し、リハビリテーションを行います。
                    </Para>
                </div>
            </Content>
        </IntersectBox>
    </Wrapper>
}

