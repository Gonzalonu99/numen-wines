import styled from 'styled-components';

export const StyledWinesContainer = styled.div`
  background-color: #161314;
  display: flex;
  justify-items: center;
  align-items: center;
  flex-wrap:wrap; 
  max-width: 1200px;
  padding-top: 20px;
  @media(max-width: 786px) {
    flex-direction: column;
  }
`;

export const StyledCards = styled.div`
  width: 300px;
  height: 400px; 
  margin: 20px;
  padding: 20px;
  background-color: #201D1E;
  img {
    width:80%;
    height: 75%;
    margin-left: 20px;
  }
`;

export const StyledTopWinesTitle = styled.h2`
  font-size: 30px;
  padding-top:30px;
`;

export const StyledSpan = styled.span`
  color: #7e1b22;
`;

export const ImgText = styled.h5`
  text-align: center;
  margin-top: 5px;
`;
