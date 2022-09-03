import { HeaderContainer } from "./styles";
import logoSrc from '../../assets/logo.svg';

export const Header = () => {
    return (
        <HeaderContainer>
            <img src={logoSrc} alt="" />
        </HeaderContainer>
    )
}