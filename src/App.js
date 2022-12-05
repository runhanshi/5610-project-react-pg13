
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";

import Nav from "./nav";
import Register from "./users/register";
import Login from "./users/login";
import usersReducer from "./users/users-reducer";
import extRecipeReducer from "./ext-recipe/ext-recipe-reducer";
import ExtRecipeSearch from "./ext-recipe/ext-recipe-search";

import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
    reducer: {
        users: usersReducer,
        ext_recipe: extRecipeReducer,
    }
});

function App() {
    return (

        <div className="container mt-4 mb-4">
            <Provider store={store}>
                <BrowserRouter>

                    <Nav />
                    <Routes>

                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/search" element={<ExtRecipeSearch />} />
                    </Routes>

                </BrowserRouter>

            </Provider>
        </div>

    );
}

export default App;
