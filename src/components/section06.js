import React from 'react';
import styled from "styled-components";
import {FlexCenter} from './section03';
import flogo from '../images/f-logo.png';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    background-color: #fff;
    background-position: center top;
    background-size: 130%;
    min-height: 216.96px;

    ${FlexCenter}
    flex-flow: row wrap;

    >.content{
        position: relative;
        height: 137px;

        >div.line1{
            display: flex;
            flex-flow: row nowrap;
            height: 41px;
            ${FlexCenter}

            >div{
                width: 293px;

                &:nth-of-type(1){
                    ${FlexCenter}
                }
            }
        }

        >div.line2{
            display: flex;
            flex-flow: row nowrap;
            align-items: flex-end;
            margin-top: 30px;

            >div{
                min-width: 500px;
                font-size: 14px;

                &:nth-of-type(1){
                    
                }
                &:nth-of-type(2){
                    display: flex;
                    flex-flow: row nowrap;
                    

                    >span{
                        white-space: nowrap;
                        margin-right: 20px;
                        cursor: pointer;

                        >a{
                            white-space: nowrap;
                            &:hover{
                                text-decoration: underline;
                            }
                        }
                    }
                }
            }
        
        }
    }
`;




export default function Section06(props){
    const [visible, setVisible] = React.useState(false);


    return <Wrapper>
        <div className='content'>
            <div className='line1'>
                <div>
                    <img src={flogo} />
                </div>
                <div>
                    訪問看護ステーションnico<br/>
                    訪問看護・リハビリ
                </div>
            </div>
            <div className='line2'>
                <div>
                    <div>〒174-0065</div>
                    <div>東京都板橋区若木一丁目3-17 サイクルグラスN-1</div>
                    <div>TEL：03-6906-8941　FAX：03-6906-8942</div>
                </div>
                <div>
                    <span><a>ホーム</a></span>
                    <span><a>サービス内容</a></span>
                    <span><a>拠点紹介</a></span>
                    <span><a>採用情報</a></span>
                    <span><a>会社案内</a></span>
                </div>
            </div>
        </div>
    </Wrapper>
};