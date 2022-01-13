import React from 'react'
import styled from 'styled-components';

const RecipeContainer = styled.div`
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

const CoverImage = styled.img`
object-fit: cover;
height: 200px;
`;

const RecipeName = styled.span`
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

const SeeMoreText = styled.span`
color: #393E46;
  font-size: 1rem;
  text-align: center;
  border: solid 1px #95CD41;
  border-radius: 6px;
  padding: 10px 15px;
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover{
    border: solid 1px #78523F;
    background-color: #95CD41;
  }
`;

const IngredientsText = styled(SeeMoreText)`
color: #222831;
  border: solid 1px #FF6363;
  margin-bottom: 12px;
  &:hover{
    border: solid 1px #78523F;
    background-color: #FF6363;
  }
`;

const Recipe = () => {

  return (
    <RecipeContainer>
      <CoverImage src="https://qph.fs.quoracdn.net/main-qimg-c2361d48ebd9e8584ba43686407ff679" />
      <RecipeName>Lorem, ipsum.</RecipeName>
      <IngredientsText>Ingredients</IngredientsText>
      <SeeMoreText>See More</SeeMoreText>
    </RecipeContainer>
  );
}

export default Recipe;

