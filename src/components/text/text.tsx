import React from "react";
import { StyledText } from "./text.styles";
import type { Props } from "./text.types";

export const Text: React.FC<Props> = ({ color, variant, bold, ...rest }) => (
	<StyledText $variant={variant} $color={color} $bold={bold} {...rest} />
);
