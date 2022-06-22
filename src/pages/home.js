import React from "react";
import styled from "styled-components";
import Header from "../components/header";
import Section01 from "../components/section01";
import Section02 from "../components/section02";
import Section03 from "../components/section03";
import Section04 from "../components/section04";
import Section05 from "../components/section05";
import Section06 from "../components/section06";
import Section07 from "../components/section07";

import topLogo from "../images/pagetop.png";

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;


`;


export const HR = styled.hr`
    width: 100%;
    height: 4px;
    border: none;
    margin: 0;
    background-image: -webkit-linear-gradient(0deg, #61c4e1 0%, #fefe7d 100%);
`;

const TopLogo = styled.div`
    position: fixed;
    width: 69px;
    height: 69px;

    right: 20px;
    bottom: 20px;
    
    background: transparent url(${topLogo}) no-repeat center;
    background-size: contain;
    cursor: pointer;

    z-index: 10000;
    

`;


export default function Home(props){

    return <Wrapper>
        <Header />
        <Section01 />
        <Section02 />
        <Section03 />
        <Section04 />
        <HR />
        <Section05 />
        <Section06 />
        <Section07 />
        <TopLogo onClick={()=> setTimeout(()=>window.scrollTo({top: '0px', behavior: 'smooth'}))}/>
    </Wrapper>
}