import React, { useState } from 'react'
import styled from 'styled-components';
import search from './images/search.svg';
import recipeimg from './images/reciepe-image.png'
import { Header, RecipeImage, SearchBox, SearchIcon, SearchInput } from './components/header';
import { Recipe } from './components/Recipe'
import axios from 'axios';


const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const APP_ID = "069e961b";
const APP_KEY = "df6aa32d3e2a5bd1e43da982b6658007";

const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 20px;
  justify-content: space-evenly;
`;


function App() {

  const [timeoutId, updateTimeoutId] = useState();
  const [recipeList, setRecipeList] = useState([]);

  const fetchRecipe = async (searchString) => {
    const response = await axios.get(`https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    console.log(response.data.hits)
    setRecipeList(response.data.hits)
  };

  const onTextChange = (e) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => {
      fetchRecipe(e.target.value);
    }, 1000);
    updateTimeoutId(timeout);
  };
  // concept of debouncing

  return (
    <Container>
      <Header>
        <AppName>
          <RecipeImage src={recipeimg} />
          <h1
            style={{
              cursor: 'pointer'
            }}
          >
            Haq Se Foodie
          </h1>
        </AppName>
        <SearchBox>
          <SearchIcon src={search} />
          <SearchInput
            placeholder="Search Recipe"
            // value={searchQuery}
            onChange={onTextChange}
          />
        </SearchBox>
      </Header>
      <RecipeListContainer>
        {
          recipeList?.length && recipeList.map(() => {
            <Recipe />
          })
        }
      </RecipeListContainer>
    </Container>
  );
}

export default App;
