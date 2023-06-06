import styled from "styled-components";
import { getColor, getSpacing } from "@styles/utils";
import { StyledProps } from "./select.types";

export const StyledWrapper = styled.div<StyledProps>`
	width: 100%;
	margin-top: ${getSpacing("0.5")};
	margin-bottom: ${(props) => (props.withMessage ? getSpacing("0.5") : "0")};
	position: relative;

	svg {
		position: absolute;
		right: 1.5rem;
		top: 1.5rem;
		pointer-events: none;
	}
`;

export const StyledSelect = styled.select<StyledProps>`
	width: 100%;
	padding: ${getSpacing("0.75")} ${getSpacing("1")};
	background: ${getColor("blue-grey-50")};
	border: 1px solid
		${({ $variant }) => getColor($variant === "error" ? "orange-500" : "blue-grey-200")};
	border-radius: 0.8rem;
	outline: none;
	color: ${getColor("blue-grey-700")};
	appearance: none;
	-webkit-appearance: none;
	cursor: pointer;

	&:invalid {
		color: ${getColor("blue-grey-400")};
	}
`;
