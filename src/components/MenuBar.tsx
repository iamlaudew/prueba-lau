import styled from "@emotion/styled";
import { MenuIcon } from "./MenuIcon";
import { Container } from "./Container";

interface Props {
	handlePage: (page: string) => void;
}

const LinksContainer = styled.div`
	display: flex;
	height: 100%;
	background: black;
	border-radius: 100px;
	border: 2px solid hsla(0, 0%, 97.25490196078431%, 0.5);
	justify-content: space-around;
	align-items: center;
	position: relative;
	padding: 16px;
`;
const Picture = styled.img`
	height: 50px;
`;

const MenuBar = ({ handlePage }: Props) => {
	return (
		<Container>
			<LinksContainer>
				<MenuIcon
					title=" Acerca de mí"
					page="about"
					icon="fa-regular fa-user"
					handlePage={handlePage}
				/>
				<Picture
					src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
					alt="logo pokemon"
				/>
				<MenuIcon
					title="Busca un pokemon"
					page="cards"
					icon="fa-solid fa-magnifying-glass"
					handlePage={handlePage}
				/>
			</LinksContainer>
		</Container>
	);
};

export default MenuBar;
