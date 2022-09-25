import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendar,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { ExternalLink } from "../../../../components/ExternalLink";
import { Spinner } from "../../../../components/Spinner";
import { relativeDateFormatter } from "../../../../utils/formatter";
import { IPost } from "../../../Blog/components";
import { PostHeaderContainer } from "./styles";

interface PostHeaderProps {
  postData: IPost;
  isLoading: boolean;
}

export function PostHeader({ postData, isLoading }: PostHeaderProps) {
  const navigate = useNavigate();
  const formattedDate = relativeDateFormatter(postData?.created_at)

  function goBack() {
    navigate(-1);
  }
  return (
    <PostHeaderContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <header>
            <ExternalLink
              variant="iconLeft"
              text="Voltar"
              as="button"
              icon={<FontAwesomeIcon icon={faChevronLeft} />}
              onClick={() => goBack()}
            />
            <ExternalLink
              text="Ver no Github"
              href={postData.html_url}
              target="_blanck"
            />
          </header>
          <h1>{postData.title}</h1>
          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              {postData.user.login}
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendar} />
              {formattedDate}
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} />
              {postData.comments}
            </li>
          </ul>
        </>
      )}
    </PostHeaderContainer>
  );
}
