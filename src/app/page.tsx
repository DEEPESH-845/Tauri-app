import Form from "./form";

export default function Home() {
	return (
		<main className=" flex min-h-screen flex-col items-center justify-between p-24">
			<h1 className=" text-xl mt-10">Welcome to SolarSage.Ai</h1>

			<Form />
		</main>
	);
}
