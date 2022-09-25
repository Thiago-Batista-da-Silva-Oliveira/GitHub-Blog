import { useCallback, useEffect, useState } from "react";
import { Spinner } from "../../../components/Spinner";
import { api } from "../../../lib/axios";
import { Post } from "./Post";
import { Profile } from "./Profile";
import { SearchInput } from "./SearchInput";
import { PostsListContainer } from "./styles";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export interface IPost {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}

export const Blog = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = useCallback(
    async (query: string = "") => {
      try {
        setIsLoading(true);
        const response = await api.get(
          `/search/issues?q=${query}%20repo:${username}/${repoName}`
        );
        setPosts(response.data.items);
      } finally {
        setIsLoading(false);
      }
    },
    [posts]
  );

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div>
      <Profile />
      <SearchInput postsLength={posts.length} getPosts={getPosts} />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <PostsListContainer>
            {posts.map((post) => (
              <Post post={post} key={post.number} />
            ))}
          </PostsListContainer>
        </>
      )}
    </div>
  );
};
