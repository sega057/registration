import styled, { css } from "styled-components";
import { getColor, getFontSize, getFontWeight } from "@styles/utils";
import { StyledProps } from "./text.types";

const applyTag = (variant: StyledProps["$variant"]) => {
	if (variant === "heading-xl-h2") {
		return "h2";
	} else if (variant === "utilities-button") {
		return "span";
	} else {
		return "p";
	}
};

const applyVariant = ({ $variant }: StyledProps) => {
	if ($variant === "heading-xl-h2") {
		return css`
			font-size: ${getFontSize("48")};
			font-weight: ${getFontWeight("semibold")};
			line-height: 1.5;
		`;
	} else if ($variant === "utilities-caption") {
		return css`
			font-size: ${getFontSize("12")};
			font-weight: ${getFontWeight("medium")};
			line-height: 1.5;
		`;
	} else if ($variant === "utilities-button") {
		return css`
			font-size: ${getFontSize("14")};
			font-weight: ${getFontWeight("semibold")};
			line-height: 2;
		`;
	} else if ($variant === "content-micro") {
		return css`
			font-size: ${getFontSize("14")};
			font-weight: ${getFontWeight("semibold")};
			line-height: 1.5;
		`;
	}
};

export const StyledText = styled.p.attrs(({ $variant, ...rest }: StyledProps) => {
	return {
		...rest,
		as: applyTag($variant),
	};
})<StyledProps>`
	${applyVariant};
	color: ${({ $color }) => ($color ? getColor($color) : "inherit")};
`;
