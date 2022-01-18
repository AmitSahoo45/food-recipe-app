import React, { useState } from 'react'
import styled from 'styled-components';
import search from './images/search.svg';
import recipeimg from './images/reciepe-image.png'
import { Header, RecipeImage, SearchBox, SearchIcon, SearchInput } from './components/header';
import axios from 'axios';
import { CoverImage, IngredientsText, RecipeContainer, RecipeName, SeeMoreText } from './components/Recipe';
import { makeStyles } from '@material-ui/core/styles';
import { Dialog, AppBar, Toolbar, Typography, IconButton, DialogContent } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Initial from './components/Initial/Initial';

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

const useStyles = makeStyles((theme) => ({
  header: {
    cursor: 'pointer',
    ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
      fontWeight: 10,
    }
  },
}));

const Recipe = (props) => {
  const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
      background: '#EA5C2B'
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
    tables: {
      minWidth: '100vw'
    },
    tableHead: {
      fontFamily: 'Inter',
      fontSize: 20
    },
    tabeleCont: {
      fontSize: 15,
      fontWeight: 'bold',
      // wordBreak: 'break-word'
      '@media (max-width:780px)': {
        width: '30vw'
      }
    }
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
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Ingredients
            </Typography>
          </Toolbar>
        </AppBar>
        <DialogContent>
          <RecipeName>{recipeObj.label}</RecipeName>
          <div>
            <Typography variant="h6" >Cuisine : {recipeObj.cuisineType[0]}</Typography>
            <Typography variant="subtitle1" >Meal Type : {recipeObj.mealType}</Typography>
            <Typography variant="subtitle1" >
              <Typography variant="subtitle1"
                style={{
                  fontWeight: 'bold',
                }}
              >Diet Labels</Typography>
              <ol
                style={{
                  padding: '0 0 0 1.3rem',
                  margin: '0'
                }}
              >
                {
                  recipeObj.dietLabels.map((diet, index) => (
                    <li>{diet}</li>
                  ))
                }
              </ol>
            </Typography>
          </div>
          <table className={classes.tables}>
            <thead className={classes.tableHead}>
              <th>Ingredients</th>
              <th>Weight</th>
            </thead>
            <tbody className={classes.tabeleCont}>
              {
                recipeObj.ingredients.map((ingredient, index) => (
                  <tr key={index} >
                    <td
                      style={{
                        padding: '0.3rem 0',
                        wordBreak: 'break-word',
                        width: '50vw'
                      }}
                    >{ingredient.text}</td>
                    <td
                      style={{
                        padding: '0.3rem 0',
                        textAlign: 'center',
                      }}
                    >{ingredient.weight.toFixed(2)}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </DialogContent>
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

  const classes = useStyles();

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
            className={classes.header}
            onClick={() =>
              window.location.reload(false)
            }
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
          (recipeList.length === 0) ? (
            <Initial />
          ) :
            (
              recipeList.length && recipeList.map((recipeObj) => (
                <Recipe recipeObj={recipeObj.recipe} />
              ))
            )
        }
      </RecipeListContainer>
    </Container >
  );
}

export default App;
