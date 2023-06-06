import React from "react";
import { StyledRadio, StyledLabel } from "./radio-button.styles";
import { Props } from "./radio-button.types";

export const RadioButton = React.forwardRef<HTMLInputElement, Props>(function RadioButton(
	{ id, label, value, ...rest },
	ref,
) {
	return (
		<StyledLabel htmlFor={id}>
			<StyledRadio type="radio" ref={ref} id={id} value={value} {...rest} />
			{label}
		</StyledLabel>
	);
});
