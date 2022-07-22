import styled from 'styled-components';

export const StyledNavBar = styled.div`
  position: relative;
  background-color: ${props => props.theme.color.primary};
  height: auto;
  margin: auto;
  padding: 0 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: -60px;
  gap: 35px;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const ImgDiv = styled.div`
  width: 50px;
  height: 70px;
  display: flex;
  align-self: flex-start;  
  margin-left: -45px;
  padding-top: 10px;
`;

export const StyledImg = styled.img`
  object-fit: cover;
  width:auto;
  height:100%; 
`;
