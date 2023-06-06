import styled from "styled-components";
import { getColor, getSpacing } from "@styles/utils";
import { StyledProps } from "./input.types";

export const StyledWrapper = styled.div<StyledProps>`
	width: 100%;
	margin-top: ${getSpacing("0.5")};
	margin-bottom: ${({ withMessage }) => (withMessage ? getSpacing("0.5") : "0")};
`;

export const StyledInput = styled.input<StyledProps>`
	width: 100%;
	padding: ${getSpacing("0.75")} ${getSpacing("1")};
	background: ${getColor("blue-grey-50")};
	border-radius: 0.8rem;
	border: 1px solid
		${({ $variant }) =>
			$variant === "error" ? getColor("orange-500") : getColor("blue-grey-200")};
	outline: none;

	&::placeholder {
		color: ${getColor("blue-grey-400")};
	}
`;
