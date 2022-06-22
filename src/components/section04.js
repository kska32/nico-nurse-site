import React from 'react';
import styled, {css} from "styled-components";
import {IntersectBox} from './section01';
import {Titles, Para} from './section02';
import {FlexCenter, ButtonSquare, ButtonRound, IntersectHover} from './section03';

import homeRecruitImg from "../images/home_recruit.png";
import homeRecruitImgBg from "../images/home_recruit_bg.jpg";

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    background: #f4fffa url(${homeRecruitImgBg}) no-repeat;
    background-position: center top;
    background-size: 130%;
    padding-top: 38.56%;

    ${FlexCenter}
    flex-flow: row wrap;
`;

const Content = styled.div`
    position: relative;
    max-width: 1200px;
    height: 435.88px;
    display: flex;
    flex-flow: row nowrap;

    

    >div{
        &:nth-of-type(1){

        }
        &:nth-of-type(2){
            flex: 1;
            display: flex;
            flex-flow: column nowrap;
            padding: 0px 30px;

            ${IntersectHover}
        }
    }

    

`;

const ParaEx2 = styled(Para)`
    margin-top: 0px;
    line-height: 2.4rem;
`;

const ParaEx3 = styled(ParaEx2)`
    margin-top: 0px;
    margin-bottom: 10px;
    line-height: 2rem;
`;

const Navs = styled.div`
    display: flex;
    flex-flow: row nowrap;

    >div{
        flex: 1;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;

        &.left{
            >.centerWrapper{
                ${FlexCenter}
                flex-flow: row wrap;
            }
        }
        &.right{
            text-align: center;
        }
    }
`;

const Button4a = styled(ButtonSquare)`
    width: 175px;
    height: 48px;
    background-color: #d5ffd8;
    
    margin-right: 10px;
    margin-bottom: 10px;
`;

export const ButtonRoundEx1 = styled(ButtonRound)`
    margin-top: 0px;
    font-size: 1.2rem;
`;

export const ButtonRoundEx2 = styled(ButtonRound)`
    background-color: orange;
    width: 252px;
    height: 49.25px;
    color: white;
    border: thin solid orange;
    margin: 0px;

    &:hover{
        border: thin solid orange;
        color: orange;
    }
`;



export default function Section04(props){
    const [visible, setVisible] = React.useState(false);

    return <Wrapper>
        <IntersectBox visibleCallback={(e)=>{setVisible(true)}}>
            <Content visible={visible}>
                <div>
                    <img src={homeRecruitImg} />
                </div>
                <div>
                    <Titles text1={'Recruit'} text2={'採用に関して'} />
                    <ParaEx2>
                        nicoでは一緒に働く仲間を随時募集しています。<br/>
                        詳しくは下記リンクよりご覧ください。
                    </ParaEx2>
                    <Navs>
                        <div className='left'>
                            <div className='centerWrapper'>
                                <Button4a>看護師</Button4a>
                                <Button4a>理学療法士</Button4a>
                                <Button4a>作業療法士</Button4a>
                                <Button4a>言語聴覚士</Button4a>
                            </div>
                        </div>
                        <div className='right'>
                            <ButtonRoundEx1>nicoの採用情報はこちら</ButtonRoundEx1>
                            <ParaEx3>
                                採用に関するお問い合わせ先<br />
                                <small>（担当：中村）</small>
                            </ParaEx3>
                            <ButtonRoundEx2>メールで問い合わせる</ButtonRoundEx2>
                        </div>
                    </Navs>
                </div>
            </Content>
        </IntersectBox>
    </Wrapper>
}