import {gql} from '@apollo/client'

export const GET_EXPLORE_POSTS = gql`

query{
  explorePosts(last: 40) {
    id
    likes
    postImage {
      url
    }
    time
    comments
    describtion
    author {
      userName
      profileImage {
        url
      }
    }
  }
}

`