import React, { useState } from "react";
import axios from "axios";

const Job = () => {
  const [post, setPost] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    text: "",
  });

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleInput = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    } else {
      setError("Only PDF files are allowed.");
      setFile(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    if (!file) {
      setError("Please upload a valid PDF file.");
      setLoading(false);
      return;
    }

    try {
      // Prepare FormData
      const formData = new FormData();
      formData.append("name", post.name);
      formData.append("email", post.email);
      formData.append("phone", post.phone);
      formData.append("subject", post.subject);
      formData.append("text", post.text);
      formData.append("attachment", file); // Add the file

      // Send the form data to the backend
      const response = await axios.post(
        "https://admin.pnhbd.com/api/job-post",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        setSuccess(true);
        setPost({
          name: "",
          email: "",
          phone: "",
          subject: "",
          text: "",
        });
        setFile(null);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to send the message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-bg flex items-center justify-center py-10 px-2 mt-[60px]">
        <div className="bg-white max-w-4xl w-full rounded-lg shadow-lg p-8">
          <div className="text-center mb-6 border-b">
            <h1 className="text-2xl font-semibold sm:font-bold text-gray-800">
              Job Application Form
            </h1>
            <p className="text-gray-600 py-2">
              Please Fill Out the Form Below to Submit Your Job Application!
            </p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-md font-medium text-gray-700">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  value={post.name}
                  onChange={handleInput}
                  name="name"
                  required
                  type="text"
                  placeholder="Name"
                  className="w-full mt-1 border p-2 outline-gray-300 rounded-md border-gray-300 shadow-sm focus:ring-sky-500 focus:border-sky-500"
                />
              </div>
              <div>
                <label className="block text-md font-medium text-gray-700">
                  E-mail <span className="text-red-500">*</span>
                </label>
                <input
                  value={post.email}
                  onChange={handleInput}
                  name="email"
                  required
                  type="email"
                  placeholder="example@example.com"
                  className="w-full mt-1 border p-2 outline-gray-300 rounded-md border-gray-300 shadow-sm focus:ring-sky-500 focus:border-sky-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-md font-medium text-gray-700">
                  Applied Position
                </label>
                <input
                  value={post.subject}
                  onChange={handleInput}
                  name="subject"
                  required
                  type="text"
                  placeholder="Applied Position"
                  className="w-full mt-1 border p-2 outline-gray-300 rounded-md border-gray-300 shadow-sm focus:ring-sky-500 focus:border-sky-500"
                />
              </div>
              <div>
                <label className="block text-md font-medium text-gray-700">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  value={post.phone}
                  onChange={handleInput}
                  name="phone"
                  required
                  type="phone"
                  placeholder="(000) 000-0000"
                  className="w-full mt-1 border p-2 outline-gray-300 rounded-md border-gray-300 shadow-sm focus:ring-sky-500 focus:border-sky-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-md font-medium text-gray-700">
                Cover Letter
              </label>
              <textarea
                value={post.text}
                onChange={handleInput}
                name="text"
                type="text"
                required
                placeholder="Please do not exceed 200 words."
                rows={5}
                className="w-full mt-1 border p-2 outline-gray-300 rounded-md border-gray-300 shadow-sm focus:ring-sky-500 focus:border-sky-500 resize-none"
              />
            </div>
            <div>
              <label className="block text-md font-medium text-gray-700">
                Upload Resume <span className="text-red-500">*</span>
              </label>
              <div className="mt-1 flex justify-center border-2 border-dashed border-gray-300 rounded-md p-6">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 20v12m8-12v12m-12 4h16a2 2 0 002-2V18a2 2 0 00-2-2h-4.586a2 2 0 01-1.414-.586l-2.828-2.828a2 2 0 00-1.414-.586H12a2 2 0 00-2 2v20a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="flex text-md text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-medium text-sky-600 hover:text-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                    >
                      <span>Upload a File</span>
                      <input
                        onChange={handleFileChange}
                        name="attachment"
                        id="file-upload"
                        type="file"
                        accept=".pdf"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PDF, DOC, or DOCX up to 2MB
                  </p>
                </div>
              </div>
            </div>
            <div>
              {loading && (
                <p className="text-blue-500 mb-4">Sending message...</p>
              )}
              {success && (
                <p className="text-sky-500 mb-4">
                  Your submission has been sent.
                </p>
              )}
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <button
                type="submit"
                className="w-full bg-darken text-white py-3 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-sky-500"
                disabled={loading}
              >
                {loading ? "Sending..." : "Apply"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Job;
