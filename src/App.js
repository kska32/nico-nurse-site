import React from "react";
import styled from "styled-components";
import Home from "./pages/home";


const AppWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
`;

function App() {
  return (
    <AppWrapper>
      <Home />
    </AppWrapper>
  );
}

export default App;
