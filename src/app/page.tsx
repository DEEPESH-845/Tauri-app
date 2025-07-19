import Form from "./form";

export default function Home() {
	return (
		<main className=" flex min-h-screen flex-col items-center justify-between p-24">
			<h1>Welcome to Tauri with Next.js!</h1>
			<p>This is a simple example of a Tauri application using Next.js.</p>

			<Form />
		</main>
	);
}
