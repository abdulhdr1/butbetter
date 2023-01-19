import { component$, useClientEffect$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Gradient } from "~/assets/gradient";

export default component$(() => {
	useClientEffect$(() => {
		const gradient = new Gradient();
		gradient.initGradient("#gradient-canvas");
	});

	return (
		<main class="min-h-screen flex flex-col relative bg-slate-900">
			<canvas
				id="gradient-canvas"
				class="fixed inset-0"
				data-transition-in
			/>
			<div class={"relative inset-y-64 font-extrabold text-7xl"}>
				<h1 class={""}>Reimagine</h1>
				<h1 class={`mix-blend-difference text-white top-20`}>
					{" "}
					everything{" "}
				</h1>
			</div>
		</main>
	);
});

export const head: DocumentHead = {
	title: "But Better",
	meta: [
		{
			name: "description",
			content:
				"What if things were better? A myriad of ideas and concepts that could change the world.",
		},
	],
};
