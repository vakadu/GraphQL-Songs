import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class LyricList extends Component{

    onLike(id, likes){
        //console.log(id);
        this.props.mutate({
            variables: { id: id },
            optimisticResponse: {
                __typename: 'Mutation',
                likeLyric: {
                    id: id,
                    __typename: 'LyricType',
                    likes: likes + 1
                }
            } //update likes immediately for better ui
            //These are optimistic responses
        });
    }

    renderLyrics(){
        return this.props.lyrics.map(lyric => {
            return(
                <li key={lyric.id} className="collection-item">
                    {lyric.content}
                    <div className="vote-box">
                        <i
                            className="material-icons"
                            onClick={() => this.onLike(lyric.id, lyric.likes)}>
                            thumb_up
                        </i>
                        {lyric.likes}
                    </div>
                </li>
            );
        })
    }

    render(){
        return(
            <ul className="collection">
                {this.renderLyrics()}
            </ul>
        );
    }
}

const mutation = gql`
    mutation LikeLyric($id: ID){
      likeLyric(id: $id){
        id
        likes
      }
    }
`;

export default graphql(mutation) (LyricList);
