import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FormPage() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch("https://getform.io/f/pbnvxlrb", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			if (response.ok) {
				toast.success("Form submitted successfully!", {
					onClose: () => navigate("/"), // Navigate after toast closes
				});
			}
			if (!response.ok) {
				throw new Error("Failed to submit form");
			}
		} catch (error) {
			console.error("Error:", error);
			toast.error("Failed to submit form");
			// Handle error (e.g., display error message)
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	return (
		<div className="bg-[rgba(0,0,0,0.425)] flex flex-col justify-center items-center w-[100%] h-[100vh] right-0 top-0 backdrop: left-0">
			<form
				onSubmit={handleSubmit}
				action="https://getform.io/f/pbnvxlrb"
				method="POST"
				className="bg-white h-[50%] w-[40%] border rounded-lg p-4 flex flex-col ">
				<h1 className="font-bold text-lg my-3">Fill out the Form</h1>
				<div className="flex flex-col gap-2">
					<label htmlFor="name">Name:</label>
					<input
						className="border border-black p-2 my-2 outline-[black]"
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="flex flex-col gap-2 my-2">
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
						className="border  border-black p-2 outline-slate-gray"
					/>
				</div>
				<button
					type="submit"
					className="bg-[#E37619] py-[8px] px-[12px] text-white mx-[20%] my-1 rounded-lg ">
					Submit
				</button>
			</form>
			<ToastContainer />
		</div>
	);
}

export default FormPage;
