import React from "react";
import { useForm } from "react-hook-form";
import { api } from "@api/index";
import { FormValues, SubmitStatus } from "./registration.types";
import { View } from "./registration.view";
import { config, texts } from "./registration.config";

export const Registration = () => {
	const [state, setState] = React.useState<{
		status: SubmitStatus;
		error?: string;
	}>({ status: SubmitStatus.IDLE });

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		mode: "onTouched",
		defaultValues: {
			newsletter: "true",
		},
	});

	const ageOptions = React.useMemo(() => {
		const options = [];

		for (let age = config.minAge; age <= config.maxAge; age++) {
			options.push({
				value: age.toString(),
				label: age.toString(),
			});
		}
		return options;
	}, []);

	const onFormSubmit = handleSubmit(async (data, e) => {
		e?.preventDefault();
		if (state.status === SubmitStatus.SUCCESS || state.status === SubmitStatus.PENDING) {
			return;
		}

		try {
			setState({ status: SubmitStatus.PENDING });
			await api.signup({
				name: data.name,
				email: data.email,
				age: data.age,
			});
			setState({ status: SubmitStatus.SUCCESS });
		} catch (error) {
			const message = error instanceof Error ? error.message : texts.somethingWentWrong;
			setState({ status: SubmitStatus.ERROR, error: message });
		}
	});

	return (
		<View
			state={state}
			ageOptions={ageOptions}
			onFormSubmit={onFormSubmit}
			register={register}
			formErrors={errors}
		/>
	);
};
