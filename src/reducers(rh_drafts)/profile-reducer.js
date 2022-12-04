import { createSlice } from "@reduxjs/toolkit";

const profile =   {
    firstName: "Alice",
    lastName: "Park",
    username: "@alicePark",
    password: "qwe123",
    usertype: "customer",
    phoneNumber: "1233211234",
    email:"alice@gmail.com",
    profilePicture: "../images/Alice.jpg",
    bio: "A viewer just search recipe.",
    dateOfBirth: "7/28/1951",
    numberOfTweets: "543"
}

const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {
        updateProfile(state, action) {
            return action.payload;
        },
    }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;