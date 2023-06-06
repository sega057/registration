import { Theme } from "@styles/styled-components";

type Get<T> = (key: keyof T) => (props: { theme: Theme }) => string | number;

export const getColor: Get<Theme["colors"]> =
	(key) =>
	({ theme }) =>
		theme.colors[key];
export const getSpacing: Get<Theme["spacing"]> =
	(key) =>
	({ theme }) =>
		theme.spacing[key];
export const getFontSize: Get<Theme["fontSizes"]> =
	(key) =>
	({ theme }) =>
		theme.fontSizes[key];
export const getFontWeight: Get<Theme["fontWeights"]> =
	(key) =>
	({ theme }) =>
		theme.fontWeights[key];
