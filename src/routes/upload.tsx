import { createFileRoute } from "@tanstack/react-router";
import UploadBook from "../componrents/upload-book/upload";

export const Route = createFileRoute("/upload")({
	component: UploadBook,
});
