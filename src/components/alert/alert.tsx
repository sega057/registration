import React from "react";
import { CircleCheckIcon } from "@assets/circle-check";
import { XmarkIcon } from "@assets/xmark";
import { Text } from "@components/text";
import { StyledWrapper } from "./alert.styles";
import { Props } from "./alert.types";

export const Alert: React.FC<Props> = ({ variant, text }) => {
	const Icon = variant === "error" ? XmarkIcon : CircleCheckIcon;

	return (
		<StyledWrapper $variant={variant}>
			<Icon />
			<Text variant="content-micro">{text}</Text>
		</StyledWrapper>
	);
};
