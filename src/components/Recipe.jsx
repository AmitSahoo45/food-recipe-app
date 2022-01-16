import styled from 'styled-components';

export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 300px;
  box-shadow: 0px 0px 8px 0px #c4c4c4;
  color: #222831;
  cursor: pointer;
  transition: all 0.3s ease-out;
  border: 0px;
  border-radius: 5px;
  font-family: 'Inter', sans-serif;
  
  &:hover {
    box-shadow: 0px 0px 8px 0px #393E46;
  }
`;

export const CoverImage = styled.img`
object-fit: cover;
height: 200px;
`;

export const RecipeName = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 10px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #707070;
  transition: all 0.3s ease-out;
  cursor: pointer;
  &:hover {
    color: #0F0B08;
  }
`;

export const SeeMoreText = styled.span`
  color: #000000;
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  border: solid 1px #95CD41;
  border-radius: 6px;
  padding: 10px 15px;
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover{
    border: solid 1px #0F0E0E;
    background-color: #FF7F3F;
  }
`;

export const IngredientsText = styled(SeeMoreText)`
  color: #000000;
  border: solid 1px #FF6363;
  margin-bottom: 12px;
  &:hover{
    border: solid 1px #0F0E0E;
    background-color: #95CD41;
  }
`;


