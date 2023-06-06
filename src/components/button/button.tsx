import React from "react";
import { Text } from "@components/text";
import { Props } from "./button.types";
import { StyledButton } from "./button.styles";

export const Button: React.FC<Props> = ({ children, ...rest }) => {
	return (
		<StyledButton {...rest}>
			<Text variant="utilities-button">{children}</Text>
		</StyledButton>
	);
};
