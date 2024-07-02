import styled from "@emotion/styled";
import { MenuIcon } from "./MenuIcon";
import { Container } from "./Container";

const LinksContainer = styled.div`
	display: flex;
	height: 100%;
	background: black;
	border-radius: 100px;
	border: 2px solid rgba(248, 248, 248, 0.5);
	justify-content: space-around;
	align-items: center;
	position: relative;
	padding: 16px;
`;
const FigureBall = styled.figure`
	background: black;
	border-bottom: 2px solid rgba(248, 248, 248, 0.5);
	border-radius: 50%;
	position: absolute;
	bottom: -50px;
	cursor: pointer;
`;

const MenuBar = ({ handlePage }) => {
	return (
		<Container>
			<LinksContainer>
				<MenuIcon
					title=" Acerca de mí"
					page="about"
					icon="fa-regular fa-user"
					handlePage={handlePage}
				/>
				<FigureBall>
					<img
						src="/src/assets/pokebola.png"
						alt="pokebola"
						onClick={() => handlePage("home")}
					/>
				</FigureBall>
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
