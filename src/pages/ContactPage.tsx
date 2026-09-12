import React, { useCallback, useState } from "react";
import { FaMailBulk, FaGithub, FaLinkedin } from "react-icons/fa";
import { TextField, Box, Grid, Button } from "@mui/material";

export default function ContactPage() {
  const darkTextFieldStyle = {
    // 1. Label styles (Inactive & Active)
    "& .MuiInputLabel-root": {
      color: "#94a3b8", // Light slate gray (highly visible)
      fontWeight: 500,
      "&.Mui-focused": {
        color: "#38bdf8", // Bright cyan when active
      },
    },
    // 2. Input box container styles
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#1e293b", // Dark slate background to contrast against black page
      borderRadius: "8px",
      color: "#ffffff", // Crisp white text typed by user
      fontSize: "0.95rem",
      // Default border
      "& fieldset": {
        borderColor: "rgba(255, 255, 255, 0.2)",
      },
      // Hover border
      "&:hover fieldset": {
        borderColor: "#38bdf8",
      },
      // Focused border
      "&.Mui-focused fieldset": {
        borderColor: "#38bdf8",
        borderWidth: "2px",
      },
    },
    // 3. Webkit Autofill fix (prevents browser autofill from making background white)
    "& .MuiOutlinedInput-input:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #1e293b inset",
      WebkitTextFillColor: "#ffffff",
      borderRadius: "8px",
    },
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const buildMailto = useCallback(() => {
    const recipient = "rizal.mujahiddan@gmail.com";
    const subject = "New Acquaintance Form Submission";

    const body =
      `Name: ${formData.name || "(not provided)"}\n` +
      `Email: ${formData.email || "(not provided)"}\n\n` +
      `───\n${formData.message}\n\nSent from React contact form.`;
    return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [formData]);

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name.trim() && !formData.email.trim()) {
      alert("Please enter at least a name or an email");
      return;
    }

    window.location.href = buildMailto();

    console.log("Data yang dikirim:", formData);
  };
  return (
    <main className="mx-auto w-screen my-12">
      <h1 className="text-6xl text-center">Connect / Start A Conversation</h1>
      <p className="text-center">
        Based in Depok, Indonesia. Ready For Seeking Job
      </p>
      <article className="flex justify-around mt-8">
        <section>
          <p className="text-2xl text-gray-400">Quick Contacts</p>
          <p className="text-lg">
            <FaMailBulk className="inline" />{" "}
            <span className="text-gray-400">EMAIL</span>:
            rizal.mujahiddan@gmail.com
          </p>
          <p className="text-lg">
            <FaLinkedin className="inline" />{" "}
            <span className="text-gray-400">LINKEDIN</span>:
            <a href="https://www.linkedin.com/in/rizal-mujahiddan">
              {" "}
              rizal-mujahiddan
            </a>
          </p>
          <p className="text-lg">
            <FaGithub className="inline" />{" "}
            <span className="text-gray-400">GITHUB</span>:{" "}
            <a href="github.com/rizal-mujahiddan"> rizal-mujahiddan</a>
          </p>
        </section>
        <section>
          <p className="text-2xl text-gray-400">Direct Contacts</p>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ maxWidth: 400, margin: "20px auto" }}
          >
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  label="Full Name"
                  name="name" // Harus sama dengan key di dalam state
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                  sx={darkTextFieldStyle}
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  label="Email"
                  name="email" // Harus sama dengan key di dalam state
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  sx={darkTextFieldStyle}
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <TextField
                  label="Message"
                  name="message"
                  type="textarea"
                  value={formData.message}
                  onChange={handleChange}
                  fullWidth
                  required
                  sx={darkTextFieldStyle}
                />
              </Grid>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Kirim Data
              </Button>
            </Grid>
          </Box>
        </section>
      </article>
    </main>
  );
}
