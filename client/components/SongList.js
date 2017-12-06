import React, {Component} from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component{
    render(){

        console.log(this.props);
        return(
            <div>
                SongList
            </div>
        );
    }
}

const query = gql`
    {
        songs{
            title
        }
    }
`;

//queries are not valid js so we use graphql-tag to make it valid

export default graphql(query)(SongList);
