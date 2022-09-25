import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendar, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../components/ExternalLink";
import { PostHeaderContainer } from "./styles";

export function PostHeader () {
    return (
        <PostHeaderContainer>
            <header>
                <ExternalLink text="Voltar" as="button" icon={<FontAwesomeIcon icon={faChevronLeft} />} href="#" />
                <ExternalLink text="Ver no Github" href="#" target="_blanck" />
            </header>
            <h1>JavaScript</h1>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faGithub} />
                    cameronwll
                </li>
                <li>
                    <FontAwesomeIcon icon={faCalendar} />
                    Há 1 dia
                </li>
                <li>
                    <FontAwesomeIcon icon={faComment} />
                    5 comentários
                </li>
            </ul>
        </PostHeaderContainer>
    )
}