import { PostContainer } from "./styles";

export function Post() {
    return (
        <PostContainer to='/post/1'>
          <div>
            <strong>JavaScript data types and structures</strong>
            <span>Há 1 dia</span>
          </div>
          <p>
            Programming languages all have built-in data...
          </p>
        </PostContainer>

    )
}