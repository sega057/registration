import styled from "styled-components";
import { getColor, getSpacing } from "@styles/utils";

export const StyledLabel = styled.label`
	display: flex;
	align-items: center;
	align-self: flex-start;
	gap: ${getSpacing("0.75")};
	padding: ${getSpacing("0.5")} 0;
	cursor: pointer;
`;

export const StyledRadio = styled.input`
	flex-shrink: 0;
	margin: 0;
	width: 1.6rem;
	height: 1.6rem;
	position: relative;
	border: 1px solid ${getColor("pure-black")};
	border-radius: 50%;
	-webkit-appearance: none;
	appearance: none;
	cursor: pointer;

	:hover {
		::after {
			background-color: ${getColor("blue-grey-400")};
		}
	}

	:checked {
		::after {
			background-color: ${getColor("pure-black")};
		}
	}

	::after {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 50%;
		width: 0.6rem;
		height: 0.6rem;
	}
`;
