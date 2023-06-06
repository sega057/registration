type Variant = "error" | "info";

export type Props = {
	variant: Variant;
	text: string;
};

export type StyledProps = {
	$variant: Variant;
};
