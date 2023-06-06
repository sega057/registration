export const config = {
	minAge: 10,
	minRequiredAge: 18,
	maxAge: 100,
	nameMinLength: 3,
	emailPattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
};

export const texts = {
	somethingWentWrong: "Something went wrong",
	requiredField: "This field is required",
	nameMinLength: "Name has to have at least 3 characters",
	emailInvalid: "Email is invalid",
	minAge: "You have to be 18 to proceed",
	successRegistration: "You have successfully registered",
	errorRegistration: "Error sending form:",
};
