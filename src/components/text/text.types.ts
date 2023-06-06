import { Theme } from "@styles/styled-components";

type Variant = "heading-xl-h2" | "utilities-caption" | "utilities-button" | "content-micro";

export type Props = {
	color?: keyof Theme["colors"];
	variant?: Variant;
	bold?: boolean;
} & React.HTMLAttributes<HTMLSpanElement>;

export type StyledProps = {
	$variant?: Variant;
	$color?: keyof Theme["colors"];
	$bold?: boolean;
};
