import React from "react";
import { Input, Text, Select, Alert, Button, RadioButton } from "@components/index";
import { StyledAlertWrapper } from "@components/alert/alert.styles";
import {
	StyledWrapper,
	StyledForm,
	StyledHeadingWrapper,
	StyledFieldset,
	StyledFieldWrapper,
} from "./registration.styles";
import { Props, SubmitStatus } from "./registration.types";
import { config, texts } from "./registration.config";

export const View: React.FC<Props> = ({
	state: { status, error },
	register,
	onFormSubmit,
	formErrors,
	ageOptions,
}) => {
	const showAlert = status === SubmitStatus.ERROR || status === SubmitStatus.SUCCESS;
	const isSubmitDisabled = status === SubmitStatus.PENDING || status === SubmitStatus.SUCCESS;

	return (
		<StyledWrapper>
			<StyledHeadingWrapper>
				<Text variant="heading-xl-h2" color="blue-grey-800" bold>
					Registration form
				</Text>
			</StyledHeadingWrapper>
			<StyledForm noValidate onSubmit={onFormSubmit}>
				<StyledFieldWrapper>
					<Input
						{...register("name", {
							required: texts.requiredField,
							minLength: {
								value: config.nameMinLength,
								message: texts.nameMinLength,
							},
						})}
						variant={formErrors.name ? "error" : "default"}
						message={formErrors.name?.message}
						id="name"
						label="Name"
						placeholder="John Smith"
					/>
				</StyledFieldWrapper>
				<StyledFieldWrapper>
					<Input
						{...register("email", { required: texts.requiredField })}
						variant={formErrors.email ? "error" : "default"}
						message={formErrors.email?.message}
						id="email"
						label="Email Address"
						type="email"
						placeholder="john.smith@example.com"
					/>
				</StyledFieldWrapper>
				<StyledFieldWrapper>
					<Select
						{...register("age", { required: texts.requiredField, valueAsNumber: true })}
						variant={formErrors.age ? "error" : "default"}
						options={ageOptions}
						id="select"
						label="How old are you?"
						placeholder="Select your age from dropdown"
						message={formErrors.age?.message || texts.minAge}
						defaultValue=""
						required
					/>
				</StyledFieldWrapper>
				<StyledFieldWrapper>
					<StyledFieldset>
						<RadioButton
							{...register("newsletter")}
							label="Send me newsletters"
							value="true"
							id="radio-button-1"
						/>
						<RadioButton
							{...register("newsletter")}
							label="Don't send me newsletters"
							value="false"
							id="radio-button-2"
						/>
					</StyledFieldset>
				</StyledFieldWrapper>
				{showAlert && (
					<StyledAlertWrapper marginBottom="normal">
						<Alert
							variant={status === "error" ? "error" : "success"}
							text={
								status === "error"
									? `${texts.errorRegistration} ${error}`
									: texts.successRegistration
							}
						/>
					</StyledAlertWrapper>
				)}
				<Button type="submit" disabled={isSubmitDisabled} onClick={onFormSubmit}>
					Submit form
				</Button>
			</StyledForm>
		</StyledWrapper>
	);
};
