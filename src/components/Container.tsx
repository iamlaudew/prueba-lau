import styled from "@emotion/styled";

interface Props {
	children: JSX.Element | JSX.Element[];
}

const MenuContainer = styled.div`
	max-width: 720px;
	margin: auto;
	height: fit-content;
	border: 1px solid peru;
`;
export const Container = ({ children }: Props) => {
	return <MenuContainer>{children}</MenuContainer>;
};
