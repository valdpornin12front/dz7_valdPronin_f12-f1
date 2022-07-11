import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch ,useSelector} from "react-redux";
import { getPosts , getOnePost} from "../../store/tableSlice";


function GetPage () {

    const dispatch = useDispatch()
    const posts = useSelector(state => state.tableReducer.posts)
    const postOne = useSelector(state => state.tableReducer.postOne)


    useEffect(() => {
        dispatch(getPosts())

    } , [])

   const getOnePostFunc =(e) =>{
    const id = e.target.dataset.id

    dispatch(getOnePost(id))
   }
    return(
        <div>
        <h1>users</h1>
        {/* {console.log(posts)} */}
    <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>body</th>
                    <th>action</th>

                </tr>
                </thead>
                <tbody>
               {posts.slice(0,10).map(post =>
                <tr>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                    <td>
                    <button onClick={getOnePostFunc}  data-id={post.id} >
                        watch
                    </button>
                    </td>

                </tr>
)}
               
                </tbody>
            </Table>

            <ul>
                <li>title:{postOne.title}</li>
                <li>body:{postOne.body}</li>

            </ul>
        

        </div>
    )
}

export default GetPage;