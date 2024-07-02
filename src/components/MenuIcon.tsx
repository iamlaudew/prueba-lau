import styled from "@emotion/styled";

interface Props {
	title: string;
	icon: string;
	page: string;
	handlePage: (page: string) => void;
}

const IconDiv = styled.a`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4px;
	cursor: pointer;
	:hover {
		color: var(--poke-sky);
	}
`;
const Icon = styled.i`
	font-size: 24px;
	padding: 4px;
`;
const Title = styled.p`
	text-transform: uppercase;
	font-size: 10px;
	letter-spacing: 2px;
`;

export const MenuIcon = ({ title, icon, page, handlePage }: Props) => {
	return (
		<IconDiv>
			<Icon className={icon} onClick={() => handlePage(page)} />
			<Title>{title}</Title>
		</IconDiv>
	);
};
