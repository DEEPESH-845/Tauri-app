"Use client";

import { invoke } from "@tauri-apps/api/core";
import { useState } from "react";
import "./form.css";

export default function Form() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (name && email) {
			invoke<string>("greet", { name, email })
				.then((result) => console.log(result))
				.catch(console.error);
		}
	};

	return (
		<div className="form-container">
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name"> Name: </label>
					<input
						type="text"
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email"> Name: </label>
					<input
						type="text"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}
