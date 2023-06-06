export type Props = {
	variant: "error" | "default";
	id: string;
	label: string;
	options: Array<{ value: string; label: string }>;
	message?: string;
	placeholder?: string;
} & React.InputHTMLAttributes<HTMLSelectElement>;

export type StyledProps = {
	$variant?: "error" | "default";
	withMessage?: boolean;
};
