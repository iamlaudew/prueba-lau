import MenuBar from "./components/MenuBar";
import { SectionAbout } from "./components/SectionAbout";
import { SectionPokemon } from "./components/SectionPokemon";
import { SectionHome } from "./components/SectionHome";
import { usePageContext } from "./context/PageContext";

const App = () => {
	const { pageSelected, setPageSelected } = usePageContext();

	const handlePage = (page: string) => {
		console.log("le diste click", page);
		setPageSelected(page);
	};

	return (
		<>
			<MenuBar handlePage={handlePage} />
			{pageSelected === "home" ? (
				<SectionHome />
			) : pageSelected == "about" ? (
				<SectionAbout />
			) : (
				<SectionPokemon />
			)}
		</>
	);
};

export default App;
