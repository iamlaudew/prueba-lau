import styled from "@emotion/styled";
import { Container } from "./Container";
const CardContainer = styled.div`
	position: relative;
	border-radius: 16px;
	overflow: hidden;
	width: 380px;
	margin: 16px auto;
	padding: 24px;
	display: grid;
	grid-template-columns: auto 1fr;
	gap: 16px;
	justify-items: left;
`;
const Pokedex = styled.p`
	grid-area: 1 / 1 / 2 / 3;
	font-size: 18px;
`;

const Name = styled.h3`
	grid-area: 2 / 1 / 3 / 3;
	font-size: 32px;
`;
const Figure = styled.figure`
	grid-area: 3 / 1 / 4 / 3;
	border-radius: 50%;
	overflow: hidden;
	width: 200px;
	height: 200px;
	margin: 24px 0;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0px 5px 10px 0px black;
	justify-self: center;
	img {
		width: 120%;
	}
`;
const Subtitle = styled.h4`
	font-size: 20px;
	letter-spacing: 1px;
	width: fit-content;
`;

const TagsContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: fit-content;
	gap: 8px;
`;

const Tag = styled.p`
	font-size: 12px;
	letter-spacing: 1.5px;
	text-transform: uppercase;
	font-weight: 700;
	background-color: rgba(255, 255, 255, 0.6);
	padding: 4px;
	border-radius: 2px;
	color: #0d131a;
	width: fit-content;
`;
const MoveTag = styled.p`
	font-size: 12px;
	letter-spacing: 1px;e;
	font-weight: 400;
`;

const Line = styled.div`
	position: absolute;
	bottom: 8px;
	left: 50%;
	transform: translateX(-50%);
	width: 60%;
	height: 1px;
	background-color: rgba(240, 248, 255, 0.6);
`;
export const SectionAbout = () => {
	return (
		<>
			<Container>
				<CardContainer className={`background water`}>
					<Pokedex>#24</Pokedex>
					<Name>Laura (lau)</Name>
					<Figure>
						<img
							src="https://avatars.githubusercontent.com/u/130884489?v=4"
							alt="pokemon"
						/>
					</Figure>

					<Subtitle>Hobbies</Subtitle>
					<TagsContainer>
						<Tag>Fotografía</Tag>
						<Tag>Cine</Tag>
						<Tag>Música</Tag>
					</TagsContainer>
					<Subtitle>Favoritos</Subtitle>
					<TagsContainer>
						<MoveTag>Película: Shrek 💚</MoveTag>
						<MoveTag>Serie: The Office</MoveTag>
						<MoveTag>Cantante: Adele</MoveTag>
						<MoveTag>Canción: Post Química - Caloncho</MoveTag>
						<MoveTag>Mascotas: Meredith (boxer)</MoveTag>
						<MoveTag>Comida: todas las pastas y la pizza</MoveTag>
						<MoveTag>Tacos: al pastor</MoveTag>
						<MoveTag>Team: frío</MoveTag>
						<MoveTag>Team: Marvel</MoveTag>
					</TagsContainer>
					<Line />
				</CardContainer>
			</Container>
		</>
	);
};
