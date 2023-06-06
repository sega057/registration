import styled from "styled-components";
import { StyledProps } from "./button.types";
import { getColor, getSpacing } from "@styles/utils";

export const StyledButton = styled.button<StyledProps>`
	padding: ${getSpacing("1")} ${getSpacing("1.5")};
	border-radius: 0.8rem;
	border: none;
	background-color: ${({ disabled }) =>
		disabled ? getColor("blue-grey-200") : getColor("teal-500")};
	color: ${({ disabled }) => (disabled ? getColor("blue-grey-400") : getColor("pure-white"))};
	cursor: pointer;
`;
