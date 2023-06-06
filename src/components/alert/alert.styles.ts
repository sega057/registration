import styled from "styled-components";
import { StyledProps } from "./alert.types";
import { getColor, getSpacing } from "@styles/utils";

export const StyledWrapper = styled.div<StyledProps>`
	display: flex;
	align-items: center;
	gap: ${getSpacing("0.75")};
	width: 100%;
	padding: ${getSpacing("0.75")};
	background-color: ${({ $variant }) =>
		$variant === "error" ? getColor("orange-200") : getColor("green-200")};
	border-radius: 0.8rem;

	svg {
		width: 2.4rem;
		height: 2.4rem;
	}
`;

export const StyledAlertWrapper = styled.div<{
	marginBottom?: "normal";
}>`
	margin-bottom: ${({ marginBottom }) => (marginBottom === "normal" ? getSpacing("1.5") : "0")};
`;
