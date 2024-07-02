import { useState } from "react";
import styled from "@emotion/styled";

interface Props {
	setPokemon: (option: string) => void;
}
interface DropdownContentProps {
	open: boolean;
}
const DropdownContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: auto;
	max-width: 370px;
	padding: 24px;
`;

const DropdownButton = styled.button`
	background-color: var(--text);
	color: var(--background);
	padding: 10px 20px;
	font-size: 16px;
	border-radius: 30px;
	border: none;
	cursor: pointer;
	height: 40px;
	width: 370px;
	transition: background-color 0.3s ease;
	&:hover {
		background-color: var(--fire-color);
	}
`;

const DropdownContent = styled.div<DropdownContentProps>`
	display: ${(props) => (props.open ? "block" : "none")};
	position: absolute;
	text-align: center;
	top: 64px;
	border-radius: 8px;
	background-color: #2c2c2c;
	color: var(--text);
	width: 370px;
	box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
	z-index: 1;
	overflow: hidden;
`;

const DropdownItem = styled.p`
	padding: 12px 0;
	margin: 0;
	text-decoration: none;
	display: block;
	transition: background-color 0.3s ease;
	&:hover {
		background-color: var(--fire-color);
		cursor: pointer;
	}
`;

const Dropdown = ({ setPokemon }: Props) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};
	const handleOption = (option: string) => {
		setIsOpen(!isOpen);
		console.log("le diste click a ", option);
		setPokemon(option);
	};

	const pokemonList = [
		"charmander",
		"squirtle",
		"piolin",
		"eevee",
		"snorlax",
		"mew",
		"togepi",
		"meowth",
		"sandshrew",
		"bulbasaur",
	];

	return (
		<DropdownContainer>
			<DropdownButton onClick={toggleDropdown}>
				Elige un pokémon <i className="fa-solid fa-angle-down"></i>
			</DropdownButton>
			<DropdownContent open={isOpen}>
				{pokemonList.map((pokemon) => (
					<DropdownItem
						key={pokemon}
						onClick={() => handleOption(pokemon)}>
						{pokemon.toUpperCase()}
					</DropdownItem>
				))}
			</DropdownContent>
		</DropdownContainer>
	);
};

export default Dropdown;
