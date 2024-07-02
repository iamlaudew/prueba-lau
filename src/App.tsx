import MenuBar from "./components/MenuBar";
import { SectionAbout } from "./components/SectionAbout";
import { SectionPokemon } from "./components/SectionPokemon";
import { usePageContext } from "./context/PageContext";

const App = () => {
	const { pageSelected, setPageSelected } = usePageContext();

	const handlePage = (page: string) => {
		setPageSelected(page);
	};

	return (
		<>
			<MenuBar handlePage={handlePage} />
			{pageSelected == "about" ? <SectionAbout /> : <SectionPokemon />}
		</>
	);
};

export default App;
