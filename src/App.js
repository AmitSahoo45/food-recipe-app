import React, { useState } from 'react'
import styled from 'styled-components';
import search from './images/search.svg';
import recipeimg from './images/reciepe-image.png'
import { Header, RecipeImage, SearchBox, SearchIcon, SearchInput } from './components/header';
import axios from 'axios';
import { CoverImage, IngredientsText, RecipeContainer, RecipeName, SeeMoreText } from './components/Recipe';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, Dialog, AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

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

const Recipe = (props) => {
  const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  }));

  const classes = useStyles();

  const [show, setshow] = React.useState(false);
  const { recipeObj } = props;

  const handleClose = () => {
    setshow(false);
  };

  return (
    <>
      <Dialog
        open={show}
        onClose={handleClose}
        fullScreen
        // TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Ingredients
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Close
            </Button>
          </Toolbar>
        </AppBar>
      </Dialog>
      <RecipeContainer>
        <CoverImage src={recipeObj.image} />
        <RecipeName>{recipeObj.label}</RecipeName>
        <IngredientsText
          onClick={() => {
            setshow(true);
          }}
        >Ingredients</IngredientsText>
        <SeeMoreText
          onClick={() => {
            window.open(recipeObj.url)
          }}
        >See More</SeeMoreText>
      </RecipeContainer>
    </>
  );
}


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
          (recipeList.length == 0) ? (
            <CircularProgress
              style={{
                color: '#CA9703'
              }}
              size={250}
              thickness={1}
            />
          ) :
            (
              recipeList.length && recipeList.map((recipeObj) => (
                <Recipe recipeObj={recipeObj.recipe} />
              ))
            )
        }
      </RecipeListContainer>
    </Container>
  );
}

export default App;
