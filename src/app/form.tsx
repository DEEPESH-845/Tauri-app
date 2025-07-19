"use client";

import { invoke } from "@tauri-apps/api/core";
import { useState } from "react";
import "./form.css";

export default function Form() {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (name && password) {
			invoke<string>("greet", { name, password })
				.then((result) => console.log(result))
				.catch(console.error);
		}
	};

	return (
		<div className="form-container">
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name"> UserName: </label>
					<input
						type="text"
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password"> Password: </label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}
