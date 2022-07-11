import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
    "getPosts",
    async function (data ,{dispatch}) {
        const response = await fetch (`https://jsonplaceholder.typicode.com/posts`);
        const posts = await response.json()
        dispatch(getPostsAction(posts))
    }
)
export const getOnePost = createAsyncThunk(
    "getOnePost",
    async function (id , {dispatch}){
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const post = await response.json()
        dispatch(getPost(post))
    }
)
const tableSlice = createSlice({
    name:"tableSlice" , initialState:{
        posts:[],
        postOne:{}
            // title:"",
            // body:""
        
    },
    reducers:{
        getPostsAction(state, action) {
            state.posts = action.payload
        },
        getPost(state , action) {
            state.postOne = action.payload
        }
    }
})

export const {getPostsAction ,getPost} = tableSlice.actions;
export default tableSlice.reducer;