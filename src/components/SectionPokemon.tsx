import styled from "@emotion/styled";
import { Container } from "./Container";
import { Card } from "./Card";
import { useEffect, useState } from "react";
import { getPokemon } from "../services/api-fetch";
import Dropdown from "./Dropdown";
import { Spinner } from "./Spinner";

interface PokemonData {
	order: number;
	name: string;
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
	sprites: {
		other: {
			"official-artwork": {
				front_default: string;
			};
		};
	};
}

const Div = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const ErrorText = styled.p`
	margin: 30px 0;
	font-size: 24px;
	color: rgba(240, 248, 255, 0.2);
`;

export const SectionPokemon = () => {
	const [pokemon, setPokemon] = useState<string>("pikachu");
	const [dataPokemon, setDatapokemon] = useState<PokemonData | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<boolean>(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			setError(false);
			try {
				const apiData = await getPokemon(pokemon);
				setDatapokemon(apiData);
				const { order, name, types, moves, sprites } = apiData;
				const pokemonDataStorage = {
					order,
					name,
					types,
					moves,
					image: sprites.other["official-artwork"].front_default,
				};

				localStorage.setItem(
					"pokemonData",
					JSON.stringify(pokemonDataStorage)
				);
				console.log("|---------------|");
				console.log(pokemonDataStorage);
			} catch (error) {
				setError(true);
				console.error("Error al obtener datos de la API: ", error);
			} finally {
				setTimeout(() => setLoading(false), 3000);
			}
		};
		fetchData();
	}, [pokemon]);

	return (
		<>
			<Container>
				<Div>
					<Dropdown setPokemon={setPokemon} />
					{loading ? (
						<Spinner />
					) : error ? (
						<ErrorText>
							Pokémon no encontrado{" "}
							<i className="fa-regular fa-face-frown-open"></i>
						</ErrorText>
					) : dataPokemon ? (
						<Card
							pokedex={dataPokemon.order}
							pokename={dataPokemon.name}
							types={dataPokemon.types}
							moves={dataPokemon.moves}
							image={
								dataPokemon.sprites.other["official-artwork"]
									.front_default
							}
						/>
					) : (
						<p>No se pudo cargar la información del Pokémon.</p>
					)}
				</Div>
			</Container>
		</>
	);
};
