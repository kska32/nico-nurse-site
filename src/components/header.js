import React from 'react';
import styled from "styled-components";
import logo from "../images/logo.png";
import instagramLogo from "../images/instagram-logo.svg";


const Wrapper = styled.div`
    position: sticky;
    top: 0px;
    left: 0px;
    width: 100%;
    padding: 0px 15px;
    width: 100%;
    margin: auto;
    height: 100px;
    z-index: 10;

    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;

    background-color: #fff;

    >div{
        display: flex;
        flex-flow: row nowrap;


        &.left{
            >img{

            }
        }

        &.right{
            display: inline-flex;
            align-items: center;

            >a{
                position: relative;
                text-decoration: none;
                cursor: none;

                &.instag-logo{
                    background: transparent url(${instagramLogo}) no-repeat center;
                    background-position: contain;
                    width: 38px;
                    height: 38px;
                    display: inline-flex;
                    cursor: pointer;
                    margin-left: 20px;
                }
            }
        }
    }
`;


const HeaderItemWrapper = styled.div`
    position: relative;
    padding: 10px 15px;
    color: #70b4c8;
    font-weight: 500;

    &:after{
        content: '';
        background-image: -webkit-linear-gradient(0deg, #61c4e1 0%, #ffff93 100%);
        transform: scaleX(0);
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 5px;
        border-radius: 2.5px;
        transition: all 0.3s ease;
    }

    >.header-title{
        cursor: pointer;
        font-size: 1rem;

        a{
            color: #70b4c8;
            background-color: transparent;
        }
    
    }

    >.header-item-menu{
        position: absolute;
        pointer-events: none;
        max-height: 0px;
        overflow: hidden;
        padding: 0px 5px;
       
        left: 0px;
        top: 100%;
        background-color: #fff;
        box-sizing: content-box;

        flex-flow: column nowrap;
        display: flex;
        transition: all 0.3s ease;
        
        >div.header-item-menu-item{
            margin-bottom: 5px;
            white-space: nowrap;
            background-color: transparent;
            transition: all 0.3s ease;
            border-radius: 17px;

            >a{
                cursor: pointer;
                color: #70b4c8;
                height: 100%;
                width: 100%;
                display: flex;
                padding: 7px 14px;
            }

            
            &:first-of-type{
                margin-top: 5px;
            }

            &:last-of-type{
                margin-bottom: 5px;
            }

            &:hover{
                background-color: #70b4c8;
                >a{
                    color: #fff;
                }
            }



        }



    }

    &:hover{
        &:after{
            transform: scaleX(1);
        }

        >.header-item-menu{
            pointer-events: initial;
            max-height: 500px;
        }
    }

`;

const HeaderItem = ({text, url='#', items=[]}) => {
    return <HeaderItemWrapper href={url}>
        <div className='header-title'>
            <a href={url}>{text}</a>
        </div>
        {
            items?.length>0 && <div className='header-item-menu'>
                {
                    items?.map((v,i)=>(<div className='header-item-menu-item' key={i}>
                        <a href={v?.url} >{v?.text}</a>
                    </div>))
                }
            </div>
        }
    </HeaderItemWrapper>
}


export default function Header(props){


    return <Wrapper>
        <div className='left'>
            <img src={logo} />
        </div>
        <div className='right'>
            <HeaderItem text={'ホーム'} url={'#'} />
            <HeaderItem text={'サービス内容'} url={'#'} items={[
                {text:'訪問看護', url:'#'}, 
                {text:'リハビリテーション', url:'#'}
            ]}/>
            <HeaderItem text={'拠点紹介'} url={'#'} />
            <HeaderItem text={'採用情報'} url={'#'} />
            <HeaderItem text={'会社案内'} url={'#'} />
            <a className='instag-logo' href='#'></a>
        </div>
    </Wrapper>
}