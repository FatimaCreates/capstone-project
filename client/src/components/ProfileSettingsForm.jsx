import { useState } from "react";

const initialValues = { fullName: "", email: "" };
const initialTouched = { fullName: false, email: false };

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};

  const trimmedName = values.fullName.trim();
  if (!trimmedName) {
    errors.fullName = "Full name is required.";
  } else if (trimmedName.length < 2) {
    errors.fullName = "Full name must be at least 2 characters.";
  }

  const trimmedEmail = values.email.trim();
  if (!trimmedEmail) {
    errors.email = "Email is required.";
  } else if (!EMAIL_REGEX.test(trimmedEmail)) {
    errors.email = "Please enter a valid email address.";
  }

  return errors;
}

export default function ProfileSettingsForm() {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState(initialTouched);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const errors = validate(values);
  const isValid = Object.keys(errors).length === 0;

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (showSuccess) setShowSuccess(false);
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitAttempted(true);
    setTouched({ fullName: true, email: true });

    if (!isValid) return;

    // eslint-disable-next-line no-console
    console.log("Profile settings submitted:", values);
    setShowSuccess(true);

    // Hide the success message after a short delay
    setTimeout(() => setShowSuccess(false), 3000);
  }

  const showFullNameError = (touched.fullName || submitAttempted) && errors.fullName;
  const showEmailError = (touched.email || submitAttempted) && errors.email;

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="fullName">Full Name</label>
        <br />
        <input
          id="fullName"
          name="fullName"
          type="text"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(showFullNameError)}
          aria-describedby={showFullNameError ? "fullName-error" : undefined}
        />
        {showFullNameError && (
          <p id="fullName-error" role="alert" style={{ color: "red", margin: "0.25rem 0 0" }}>
            {errors.fullName}
          </p>
        )}
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="email">Email</label>
        <br />
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(showEmailError)}
          aria-describedby={showEmailError ? "email-error" : undefined}
        />
        {showEmailError && (
          <p id="email-error" role="alert" style={{ color: "red", margin: "0.25rem 0 0" }}>
            {errors.email}
          </p>
        )}
      </div>

      <button type="submit" disabled={!isValid}>
        Save
      </button>

      {showSuccess && (
        <p role="status" style={{ color: "green", marginTop: "1rem" }}>
          Profile saved successfully.
        </p>
      )}
    </form>
  );
}

/*
  MANUAL TEST CHECKLIST (also see TESTS.md)

  1. Empty submit
     - Click "Save" with both fields empty.
     - Expected: Save button is disabled (can't even click) OR if somehow
       clicked, both "Full name is required." and "Email is required."
       errors appear. Verified: Save stays disabled until both fields are
       valid, so this is enforced before submit is even possible.

  2. Invalid email
     - Type a valid full name, then type "not-an-email" in Email and blur.
     - Expected: "Please enter a valid email address." appears under Email,
       Save button stays disabled. Verified: works as expected.

  3. Valid submit
     - Enter a full name with 2+ characters and a valid email, click Save.
     - Expected: Save is enabled, click logs { fullName, email } to console,
       success message appears and disappears after ~3s. Verified: works.

  4. Blur behavior
     - Focus Full Name, type 1 character, blur without submitting.
     - Expected: "Full name must be at least 2 characters." appears only
       after blur, not while typing. Verified: works — errors only show
       once a field has been touched (blurred) or a submit was attempted.
*/
