import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FaUpload } from "react-icons/fa";

export default function UploadBook() {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <div className="flex items-center justify-center w-screen">
        <div
          className="border-4 border-dashed border-gray-300  text-black p-8 rounded shadow-lg"
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <FaUpload className="mx-auto mb-4 text-4xl" />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
        </div>
      </div>
    </>
  );
}
