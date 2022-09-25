import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useState } from "react";
import { ExternalLink } from "../../../../components/ExternalLink";
import { Spinner } from "../../../../components/Spinner";
import { api } from "../../../../lib/axios";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";

const username = "Thiago-Batista-da-Silva-Oliveira";

interface ProfileData {
  login: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company?: string;
  followers: number;
}

export const Profile = () => {
  const [profileData, setProfileDate] = useState<ProfileData>(
    {} as ProfileData
  );
  const [isLoading, setIsloading] = useState(true);

  const getrProfileData = useCallback(async () => {
    try {
      const response = await api.get(`/users/${username}`);
      setIsloading(true);
      setProfileDate(response.data);
    } finally {
      setIsloading(false);
    }
  }, [profileData]);

  useEffect(() => {
    getrProfileData();
  }, []);

  return (
    <>
      <ProfileContainer>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <ProfilePicture src={profileData.avatar_url} />

            <ProfileDetails>
              <header>
                <h1>{profileData.name}</h1>
                <ExternalLink
                  text="Github"
                  href={profileData.html_url}
                  target="_blank"
                />
              </header>
              <p>{profileData.bio}</p>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faGithub} />
                  {profileData.login}
                </li>
                {profileData?.company && (
                  <li>
                    <FontAwesomeIcon icon={faBuilding} />
                    {profileData.company}
                  </li>
                )}
                <li>
                  <FontAwesomeIcon icon={faUserGroup} />
                  {profileData.followers} seguidores
                </li>
              </ul>
            </ProfileDetails>
          </>
        )}
      </ProfileContainer>
    </>
  );
};
