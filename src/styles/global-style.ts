import reset from "styled-reset";
import { normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import { getColor, getFontSize, getFontWeight } from "@styles/utils";

export const GlobalStyle = createGlobalStyle`
	${normalize}
	${reset}

	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

	*, *::before, *::after {
		box-sizing: border-box;
	}

	html {
		font-size: 62.5%;
	}

	body {
		font-size: ${getFontSize("16")};
		font-weight: ${getFontWeight("regular")};
		font-family: 'Poppins', sans-serif;
		color: ${getColor("blue-grey-700")};
	}
`;
