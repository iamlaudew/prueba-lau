import { createContext, useContext, useState } from "react";

interface PageContextType {
	pageSelected?: string;
	setPageSelected: (page: string) => void;
}

interface Props {
	children: JSX.Element | JSX.Element[];
}

const PageContext = createContext<PageContextType>({});

const PageProvider = ({ children }: Props) => {
	const [pageSelected, setPageSelected] = useState<string>("about");

	return (
		<PageContext.Provider value={{ pageSelected, setPageSelected }}>
			{children}
		</PageContext.Provider>
	);
};

const usePageContext = () => {
	const context = useContext(PageContext);
	return context;
};

export { PageProvider, usePageContext };
