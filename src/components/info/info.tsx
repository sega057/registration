import { CircleInfoIcon } from "@assets/circle-info";
import { XmarkIcon } from "@assets/xmark";
import { Text } from "@components/text";
import { Props } from "./info.types";
import { StyledWrapper } from "./info.styles";

export const Info: React.FC<Props> = ({ variant, text }) => {
	const Icon = variant === "error" ? XmarkIcon : CircleInfoIcon;

	return (
		<StyledWrapper $variant={variant}>
			<Icon />
			<Text variant="utilities-caption">{text}</Text>
		</StyledWrapper>
	);
};
