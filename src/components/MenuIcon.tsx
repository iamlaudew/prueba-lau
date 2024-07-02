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
		color: var(--fire-color);
	}
`;
const Icon = styled.i`
	font-size: 24px;
	padding: 4px;
	transition: color 0.3s ease;
`;
const Title = styled.p`
	text-transform: uppercase;
	font-size: 10px;
	letter-spacing: 2px;
	transition: color 0.3s ease;
`;

export const MenuIcon = ({ title, icon, page, handlePage }: Props) => {
	return (
		<IconDiv onClick={() => handlePage(page)}>
			<Icon className={icon} />
			<Title>{title}</Title>
		</IconDiv>
	);
};
