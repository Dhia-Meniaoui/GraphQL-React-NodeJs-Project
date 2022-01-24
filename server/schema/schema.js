const graphql= require('graphql');
const {
    GraphQLObjectType ,
    GraphQLString ,
    GraphQLSchema ,
    GraphQLID,
    GraphQLInt,
    GraphQLList
    }= graphql;
const _= require('lodash');

// we use the fields parameter as funciton to detect the AuthorType and BookType in each one 

const BookType = new GraphQLObjectType({
    name:'Book',
    fields: () => ({
        id: { type: GraphQLID},
        name: { type: GraphQLString},
        genre: { type: GraphQLString},
        author: { 
            type: AuthorType,
            resolve(parent, args){
                console.log(parent);
                return _.find(authors , {id: parent.authorId});
            }
        }
    })
});


const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: {type : GraphQLID},
        name: {type : GraphQLString},
        age: {type: GraphQLInt},
        books:{
            type: new GraphQLList(BookType), 
            resolve(parent ,args){
                return _.filter(books , parent.id)
            }
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        book:{
            type:BookType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                //code to get data from db 
                return _.find(books , {id: args.id});

            }
        },
        author:{
            type:AuthorType,
            args: { id: {type: GraphQLID}},
            resolve(parent , args ){
                return _.find(author , {id: args.id})
            }
        },
        books:{
            type: new GraphQLList(BookType),
            resolve(parent, args){
                return books
            }
        },
        authors:{
            type: new GraphQLList(AuthorType),
            resolve(parent , args ){
                return authors 
            }
        }
    }
})

module.exports= new GraphQLSchema({
    query: RootQuery
})
