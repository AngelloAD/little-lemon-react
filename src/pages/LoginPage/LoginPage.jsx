// src/pages/LoginPage/LoginPage.jsx
import { useState, useEffect } from "react";
import "./LoginPage.css";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  // Field-level validation
  const validateField = (name, value) => {
    let message = "";
    if (!value.trim()) {
      message = "Campo obligatorio";
    }
    setErrors(prev => ({ ...prev, [name]: message }));
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (touched[name]) {
      validateField(name, value);
    }
  };

  const handleBlur = field => {
    setTouched(prev => ({ ...prev, [field]: true }));
    validateField(field, formData[field]);
  };

  // Enables submit button only when all required fields are valid
  useEffect(() => {
    const allValid =
      formData.email &&
      formData.password &&
      !errors.email &&
      !errors.password;

    setIsFormValid(allValid);
  }, [formData, errors]);

  const getInputClass = field => {
    if (!touched[field]) return "";
    return errors[field] ? "invalid" : "valid";
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!isFormValid) return;

    alert("Login successful!");
  }

  return (
    <main className="login-page">
      <div className="container">
        <section className="login-card">
          <h1>Login</h1>
          <p>Access your account to place orders faster.</p>

          <form onSubmit={handleSubmit} className="login-form">
            {/* EMAIL */}
            <div className="form-group">
              <label htmlFor="email">
                Email <span className="required">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={() => handleBlur("email")}
                className={getInputClass("email")}
              />
              {touched.email && errors.email && (
                <p className="error-message">{errors.email}</p>
              )}
            </div>

            {/* PASSWORD */}
            <div className="form-group">
              <label htmlFor="password">
                Password <span className="required">*</span>
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                onBlur={() => handleBlur("password")}
                className={getInputClass("password")}
              />
              {touched.password && errors.password && (
                <p className="error-message">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              className="login-button"
              disabled={!isFormValid}
            >
              Login
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
