import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/upload")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex justify-center place-content-center h-screen w-screen">
			Upload
		</div>
	);
}
