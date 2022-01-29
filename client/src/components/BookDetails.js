import React, { Component } from "react";
import {getBookQuery } from '../queries/queries'
import { graphql } from '@apollo/client/react/hoc';



class BookDetails extends Component {

    displaybookDetails(){

        let book = this.props.bookId;
        if (book == null ) {
            return (
                <div>
                    <p>no book selected</p>
                </div>
            )
        }
        console.log(book);
        return(
            <div>
                <p>name : {book.name}</p>
            </div>
        )
    }

    render() {
        return (            
            <div id="book-details">
                {this.displaybookDetails()}
            </div>
        )
    }
}


export default graphql(getBookQuery,{ 
    option: (props)=>{
        return {
            variables:{
                id: props.bookId
            }
        }
    }}
    )(BookDetails);

