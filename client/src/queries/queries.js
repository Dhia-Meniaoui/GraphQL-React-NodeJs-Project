import { gql   } from "@apollo/client";

const getAuthorsQuery = gql`
    {
        authors{
            name
            id 
        }
    }
`;

const getBooksQuery = gql`
    {
        books{
            name
            id 
        }
    }
`;

const addBookMutation = gql`
    mutation addBook($name: String! , $genre: String! , $authorId: ID!){
        addBook(name: $name, genre: $genre, authorId: $authorId){
            name
            genre
        }
    }
`;

const getBookQuery = gql`
    query($id:String){
        book(id:$id){
            id 
            name 
            genre
            author{
                id
                name
                age
                books{
                    name 
                    id
                }
            }
        }
    }
`;

export {getBooksQuery, getAuthorsQuery , addBookMutation , getBookQuery};