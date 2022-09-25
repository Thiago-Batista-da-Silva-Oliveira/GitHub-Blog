import { Post } from "./Post"
import { Profile } from "./Profile"
import { SearchInput } from "./SearchInput"
import { PostsListContainer } from "./styles"

export const Blog = () => {
    return (
        <div>
            <Profile />
            <SearchInput />
            <PostsListContainer>
                <Post />
                <Post />
                <Post />
               
            </PostsListContainer>
        </div>
    )
}