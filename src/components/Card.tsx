import styled from "@emotion/styled";

interface CardProps {
	pokedex: number;
	pokename: string;
	types: {
		type: {
			name: string;
		};
	}[];
	moves: {
		move: {
			name: string;
		};
	}[];
	image: string;
}
const CardContainer = styled.div`
	position: relative;
	border-radius: 16px;
	overflow: hidden;
	width: 370px;
	margin: 16px auto;
	padding: 24px 48px 24px 48px;
	display: grid;
	grid-template-columns: auto 1fr;
	grid-template-rows: repeat(5, auto);
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
	background-color: rgba(0, 0, 0, 0.2);
	border-radius: 50%;
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
	height: fit-content;
	gap: 8px;
	flex-wrap: wrap;
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
`;
const MoveTag = styled.p`
	font-size: 12px;
	letter-spacing: 1px;
	text-transform: capitalize;
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

export const Card = ({ pokedex, pokename, types, moves, image }: CardProps) => {
	return (
		<CardContainer className={`background ${types[0].type.name}`}>
			<Pokedex>#{pokedex}</Pokedex>
			<Name>{pokename}</Name>
			<Figure>
				<img src={image} alt="pokemon" />
			</Figure>

			<Subtitle>tipo</Subtitle>
			<TagsContainer>
				{types.map((type, index) => (
					<Tag key={index}>{type.type.name}</Tag>
				))}
			</TagsContainer>
			<Subtitle>Movimientos</Subtitle>
			<TagsContainer>
				{moves.slice(0, 20).map((move, index) => (
					<MoveTag key={index}>{move.move.name}</MoveTag>
				))}
			</TagsContainer>
			<Line />
		</CardContainer>
	);
};
