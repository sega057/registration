type Attributes = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">;

export type Props = {
	id: string;
	label: string;
	value: string;
} & Attributes;
