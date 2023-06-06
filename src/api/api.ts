interface SignupPayload {
	name: string;
	email: string;
	age: number;
}

class Api {
	async signup(payload: SignupPayload): Promise<void> {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (payload.name === "Invalid Name") {
					reject(new Error("Invalid name"));
				} else {
					resolve();
				}
			}, 1000);
		});
	}
}

export const api = new Api();
