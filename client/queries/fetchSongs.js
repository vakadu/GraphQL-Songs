import gql from 'graphql-tag';

export default gql`
    {
        songs{
            id
            title
        }
    }
`;

//queries are not valid js so we use graphql-tag to make it valid
