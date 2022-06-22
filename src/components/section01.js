import React from 'react';
import styled from "styled-components";
import main01Img from "../images/main01.jpg";
import mainText from "../images/main_txt.png";


const Wrapper = styled.div`
    position: relative;
    width: 100%;
    
    background: transparent url(${main01Img}) no-repeat center;
    background-size: contain;
    padding-top: 37.5%;

`;

const TextImage = styled.div`
    position: absolute;
    width: 48%;
    background: transparent url(${mainText}) no-repeat center;
    background-size: 125%;
    height: 100%;
    opacity: 0;
    transition: all 1.2s ease 0.3s;
    transform: translateY(120px);

    ${
        (p)=>p.visible && `
            opacity: 1;
            transform: translateY(0px);
        `
    }
`;


const IntersectBoxWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
`;

export const IntersectBox = React.memo(({visibleCallback, ...p})=>{
	const $me = React.useRef();
    
	React.useLayoutEffect(()=>{
		let observer = new IntersectionObserver((entries) => {
			entries.forEach((v) => {
				if(v.isIntersecting){
					visibleCallback && visibleCallback(v)
				}
			});
		}, {
			root: window.document,
			rootMargin: '-200px',
			threshold:  0
		});

		observer.observe($me.current);
		return ()=>observer.unobserve($me.current);
	},[]);

	return <IntersectBoxWrapper ref={$me} >
        {p.children}
    </IntersectBoxWrapper>
});


export default function Section01(props){
    const [visible, setVisible] = React.useState(false);

    return <Wrapper>
        <IntersectBox visibleCallback={(e)=>{setVisible(true)}}>
            <TextImage visible={visible} />
        </IntersectBox>
    </Wrapper>
}