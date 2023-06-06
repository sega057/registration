import React from "react";
import { ChevronDownIcon } from "@assets/chevron-down";
import { Info } from "@components/info";
import { StyledSelect, StyledWrapper } from "./select.styles";
import { Props } from "./select.types";

export const Select = React.forwardRef<HTMLSelectElement, Props>(function Select(
	{ variant, id, label, placeholder, options, message, ...rest },
	ref,
) {
	return (
		<div>
			<label htmlFor={id}>{label}</label>
			<StyledWrapper withMessage={Boolean(message)}>
				<StyledSelect $variant={variant} ref={ref} id={id} {...rest}>
					{placeholder && (
						<option value="" hidden disabled>
							{placeholder}
						</option>
					)}
					{options.map(({ value, label }) => (
						<option key={value} value={value}>
							{label}
						</option>
					))}
				</StyledSelect>
				<ChevronDownIcon />
			</StyledWrapper>
			{message && <Info variant={variant === "error" ? "error" : "info"} text={message} />}
		</div>
	);
});
