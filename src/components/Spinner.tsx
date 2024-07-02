import styled from "@emotion/styled";

const Spiner = styled.div`
	border: 4px solid rgba(0, 0, 0, 0.1);
	border-top: 4px solid var(--fire-color);
	border-radius: 50%;
	width: 80px;
	height: 80px;
	animation: spin 1.5s linear infinite;
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

export const Spinner = () => {
	return <Spiner />;
};
