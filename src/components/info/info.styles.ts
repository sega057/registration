import styled from "styled-components";
import { StyledProps } from "./info.types";
import { getColor, getSpacing } from "@styles/utils";

export const StyledWrapper = styled.div<StyledProps>`
	display: flex;
	align-items: center;
	gap: ${getSpacing("0.5")};
	color: ${({ $variant }) =>
		$variant === "error" ? getColor("orange-500") : getColor("blue-500")};
`;
