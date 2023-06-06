export type Props = {
	variant: "default" | "error";
	id: string;
	label: string;
	message?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type StyledProps = {
	$variant?: "default" | "error";
	withMessage?: boolean;
};
