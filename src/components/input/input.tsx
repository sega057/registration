import React from "react";
import { Info } from "@components/info";
import { StyledInput, StyledWrapper } from "./input.styles";
import { Props } from "./input.types";

export const Input = React.forwardRef<HTMLInputElement, Props>(function Input(
	{ id, label, variant, message, ...rest },
	ref,
) {
	return (
		<div>
			<label htmlFor={id}>{label}</label>
			<StyledWrapper withMessage={Boolean(message)}>
				<StyledInput ref={ref} $variant={variant} id={id} {...rest} />
			</StyledWrapper>
			{message && <Info variant={variant === "error" ? "error" : "info"} text={message} />}
		</div>
	);
});
