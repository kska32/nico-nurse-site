import React from 'react';
import styled from "styled-components";
import {FlexCenter} from './section03';

const Wrapper = styled.div`
    color: #61c4e1;
    font-size: 12px;
    font-weight: 500;
    line-height: 2;
    text-align: center;
    padding: 8px 15px;
    background-color: #c0e7f3;
    ${FlexCenter}
`;

export default function Section07(props){

    return <Wrapper>
        ©2021 nico株式会社
    </Wrapper>
}
