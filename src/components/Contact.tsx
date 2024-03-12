import { RiArrowDownSLine } from "react-icons/ri";
import { FaLinkedin, FaPhone } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { Toaster, toast } from "sonner";
import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef<HTMLFormElement | null>(null); // Add type for form ref

  const [formData, setFormData] = useState({
    user_name: "",
    user_lastname: "",
    user_email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    user_name: "",
    user_lastname: "",
    user_email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Prevent spam submission
    if (isSubmitting) {
      return;
    }

    // Validate form fields
    const nameError = formData.user_name.trim() ? "" : "First Name is required";
    const lastNameError = formData.user_lastname.trim()
      ? ""
      : "Last Name is required";
    const emailError = formData.user_email.trim() ? "" : "Email is required";
    const messageError = formData.message.trim() ? "" : "Message is required";

    setErrors({
      user_name: nameError,
      user_lastname: lastNameError,
      user_email: emailError,
      message: messageError,
    });

    // If any field is invalid, stop form submission
    if (nameError || lastNameError || emailError || messageError) {
      return;
    }

    // Set form submission status to true
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_kkwmsc9",
        "template_12lxtb5",
        form.current as HTMLFormElement, // Type assertion
        {
          publicKey: "fJrwUrvJApSOUmizM",
        },
      );
      toast.success("SUCCESS!");
    } catch (error) {
      toast.error("FAILED...");
    } finally {
      // Reset form submission status
      setIsSubmitting(false);
    }
  };

  return (
    <section className="container mt-20 py-20 text-center" id="contact">
      <span className="text-xl font-semibold uppercase text-lightBlue dark:text-darkRed">
        Contact
      </span>
      <Toaster position="top-right" richColors />

      <div className="mt-16 flex flex-col gap-4 border border-darkFont bg-forms p-4 text-white shadow-lg dark:border-light md:flex-row">
        <div className="flex flex-col justify-center gap-4 bg-backgroundColor p-4 md:w-1/3 md:justify-start">
          <span className="text-sm uppercase text-darkRed">contact info</span>
          <p className="text-center text-sm md:text-start md:text-base">
            Thank you for expressing your interest in reaching out. Don't
            hesitate to get in touch and contact me here.
          </p>
          <RiArrowDownSLine size={40} className="animate-bounce text-darkRed" />

          <div className="mt-auto flex flex-col items-center gap-2 md:items-start ">
            <p className="flex items-center gap-2 duration-300 md:hover:text-darkRed">
              <FaLinkedin />
              <a href="https://www.linkedin.com/in/jmmaglonzo/" target="_blank">
                LinkedIn
              </a>
            </p>
            <p className="flex items-center gap-2 duration-300 md:hover:text-darkRed">
              <MdOutlineMail />
              <a href="mailto:johnmaglonzo@gmail.com " target="_blank">
                johnmaglonzo@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2 duration-300 md:hover:text-darkRed">
              <FaPhone />
              <a href="tel:09126532546" target="_blank">
                0912-6532-546
              </a>
            </p>
          </div>
        </div>

        <form
          ref={form}
          className="flex w-full flex-col space-y-4"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
            <div className="flex flex-col gap-2">
              <input
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                className="border-secondary w-full border bg-backgroundColor px-4 py-1 focus:outline-none"
                placeholder="First Name"
              />
              {errors.user_name && (
                <p className="text-xs text-darkRed">{errors.user_name}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                name="user_lastname"
                value={formData.user_lastname}
                onChange={handleChange}
                className="border-secondary w-full border bg-backgroundColor px-4 py-1 focus:outline-none"
                placeholder="Last Name"
              />
              {errors.user_lastname && (
                <p className="text-xs text-darkRed">{errors.user_lastname}</p>
              )}
            </div>
            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              className="border-secondary w-full border bg-backgroundColor px-4 py-1 focus:outline-none md:col-span-2"
              placeholder="Email Address"
            />
            {errors.user_email && (
              <p className="text-xs text-darkRed md:col-span-2">
                {errors.user_email}
              </p>
            )}
          </div>
          <textarea
            name="message"
            rows={8}
            value={formData.message}
            onChange={handleChange}
            className="border bg-backgroundColor p-4 focus:outline-none"
            placeholder="Message"
          ></textarea>
          {errors.message && (
            <p className="text-sm text-darkRed">{errors.message}</p>
          )}
          <div>
            <button
              type="submit"
              disabled={isSubmitting} // Disable button while submitting
              className="border bg-lightBlue px-16 py-2 font-medium uppercase text-light dark:bg-darkRed"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
