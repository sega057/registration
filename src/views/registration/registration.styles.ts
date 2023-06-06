import styled from "styled-components";
import { getSpacing } from "@styles/utils";

export const StyledWrapper = styled.div`
	padding: 7.5rem 16rem;
`;

export const StyledForm = styled.form`
	max-width: 55.5rem;
`;

export const StyledFieldWrapper = styled.div`
	max-width: 34.3rem;
	margin-bottom: ${getSpacing("1.5")};
`;

export const StyledFieldset = styled.fieldset`
	display: flex;
	flex-direction: column;
`;

export const StyledHeadingWrapper = styled.div`
	margin-bottom: ${getSpacing("3")};
`;
