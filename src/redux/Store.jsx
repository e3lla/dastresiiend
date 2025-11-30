
import { configureStore } from "@reduxjs/toolkit";
import countdownReducer from "../components/CountDown/CountdownSlice";
import productsReducer from "../components/Products/ProductsSlice";
import dividerReducer from "../components/Divider/DividerProductsSlice";
import listProductsReducer from "../components/ListProducts/ListProductsSlice"
import sliderProductsReducer from '../components/ProductCard/ProductCardSlice';
import whyReducer from "../components/Why/WhySlice ";
import articlesReducer from '../components/LastArticle/LastArticleSlice';
import SecondSliderReducer from '../components/SecondSlider/SecondSliderSlice';
import FavoriteReducer from '../components/Favorite/FavoriteSlice';


export const store = configureStore({
  reducer: {
    countdown: countdownReducer,
    products: productsReducer,
    dividerProducts: dividerReducer, 
    listProducts: listProductsReducer,
    articles: articlesReducer,
    sliderProducts: sliderProductsReducer,
    why: whyReducer, 
    SecondSlider: SecondSliderReducer,
    Favorite: FavoriteReducer,



   },
});
