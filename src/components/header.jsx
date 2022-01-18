import styled from 'styled-components';

export const Header = styled.div`
  background-color: #222831;
  color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  font-size: 1rem;
  font-weight: bold;
  box-shadow: -1px 1px 8px 0px rgba(151,151,151,0.75);
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.1rem 0;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  border-radius: 6px;
  margin-left: 20px;
  width: 50%;
  background-color: #ffffff;
  @media (max-width: 768px) {
    margin-left: 0px;
    width: 80%;
  }
`;

export const RecipeImage = styled.img`
  width: 40px;
  height: 40px;
  margin: 15px;
`;

export const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
  font-family: 'Inter', sans-serif;
  @media (max-width: 768px){
    width: 80%
  }
`;