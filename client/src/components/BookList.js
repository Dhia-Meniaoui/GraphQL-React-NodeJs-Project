import React, { Component } from "react";
import {getBooksQuery } from '../queries/queries'
import { graphql } from '@apollo/client/react/hoc';
import BookDetails from "./BookDetails";



class BookList extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: null
        }
    }
    displayBooks(){
        const  data  = this.props.data;
        if (data.loading) return <p>Loading...</p>;

        return data.books.map(book => (    
                <li key={book.id} onClick={ (e) => {this.setState({selected: book})}}>
                    name: {book.name}
                </li>       
        ));
    }
    render() {
        return (            
            <div>
                <ul id="book-list">
                    {this.displayBooks()}
                </ul>
                <BookDetails bookId={this.state.selected}/>
            </div>
        )
    }
}


export default graphql(getBooksQuery)(BookList);

