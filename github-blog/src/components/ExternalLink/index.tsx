import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponentProps, ReactNode } from "react";
import { ExternalLinkContainer } from "./styles"

type ExternalLinkProps = ComponentProps<typeof ExternalLinkContainer> & {
    text: string;
    icon?: ReactNode;
    variant?: "iconLeft"
}

export const ExternalLink = ({text, icon, ...rest}: ExternalLinkProps) => {
    return (
        <ExternalLinkContainer {...rest}>
            { icon ?? <FontAwesomeIcon icon={faUpRightFromSquare} />}
            {text}
        </ExternalLinkContainer>
    )
}