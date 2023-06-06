import { FieldErrors, UseFormRegister } from "react-hook-form";

export type FormValues = {
	name: string;
	email: string;
	age: number;
	newsletter: "true" | "false";
};

export enum SubmitStatus {
	IDLE = "idle",
	PENDING = "pending",
	SUCCESS = "success",
	ERROR = "error",
}

export type Props = {
	state: {
		status: SubmitStatus;
		error?: string;
	};
	register: UseFormRegister<FormValues>;
	formErrors: FieldErrors<FormValues>;
	onFormSubmit: () => void;
	ageOptions: Array<{ value: string; label: string }>;
};
