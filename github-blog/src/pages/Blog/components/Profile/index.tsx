import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ExternalLink } from "../../../../components/ExternalLink"
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles"

export const Profile = () => {
    return (
        <>
          <ProfileContainer>
            <ProfilePicture src="https://avatars.githubusercontent.com/u/77520434?s=400&u=47e4c03258eff63f6d0c5abc348712a1383dfc89&v=4" />

             <ProfileDetails>
                <header>
                   <h1>Thiago Oliveira</h1>
                   <ExternalLink text="Github" href="#" />
                </header>
                <p>
                  Description... dsaidajsdiasdisajdasijdis
                </p>
                <ul>
                  <li>
                     <FontAwesomeIcon icon={faGithub} />
                     GethiXD
                  </li>
                  <li>
                     <FontAwesomeIcon icon={faBuilding} />
                      Cidade Alta
                  </li>
                  <li>
                     <FontAwesomeIcon icon={faUserGroup} />
                     4 seguidores
                  </li>
                </ul>
             </ProfileDetails>
          </ProfileContainer>
        </>
    )
}