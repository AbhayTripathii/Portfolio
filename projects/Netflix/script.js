// ---------------------------------------------------------------------------
// Netflix-style sign-in form: validation + client-side hashing demo
//
// IMPORTANT (read before treating this as "real" security):
// Hashing the password in the browser does NOT replace HTTPS or server-side
// hashing (e.g. bcrypt/argon2). If the page is served over plain HTTP, the
// hash is just as replayable as the plaintext password would have been, and
// a real backend must still hash+salt whatever it receives. What this DOES
// demonstrate is: (1) never sending the raw password in a log/console, and
// (2) using the browser's built-in SubtleCrypto API instead of a hand-rolled
// "encryption" function. Treat this as a UI/learning pattern, not a security
// control on its own.
// ---------------------------------------------------------------------------

const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const submitBtn = document.getElementById("submitBtn");
const hashStatus = document.getElementById("hashStatus");
const toggleBtn = document.getElementById("togglePassword");

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

// Show/hide password
toggleBtn.addEventListener("click", () => {
  const isHidden = passwordInput.type === "password";
  passwordInput.type = isHidden ? "text" : "password";
  toggleBtn.textContent = isHidden ? "Hide" : "Show";
  toggleBtn.setAttribute("aria-label", isHidden ? "Hide password" : "Show password");
});

function setFieldError(input, errorEl, message) {
  if (message) {
    input.classList.add("has-error");
    errorEl.textContent = message;
  } else {
    input.classList.remove("has-error");
    errorEl.textContent = "";
  }
}

function validateEmail() {
  const value = emailInput.value.trim();
  if (value === "") {
    setFieldError(emailInput, emailError, "Please enter your email or phone number.");
    return false;
  }
  if (!EMAIL_PATTERN.test(value)) {
    setFieldError(emailInput, emailError, "Please enter a valid email address.");
    return false;
  }
  setFieldError(emailInput, emailError, "");
  return true;
}

function validatePassword() {
  const value = passwordInput.value;
  if (value.length < 6) {
    setFieldError(passwordInput, passwordError, "Password must be at least 6 characters.");
    return false;
  }
  setFieldError(passwordInput, passwordError, "");
  return true;
}

// Validate as the user types/leaves a field, not just on submit
emailInput.addEventListener("blur", validateEmail);
passwordInput.addEventListener("blur", validatePassword);
emailInput.addEventListener("input", () => {
  if (emailInput.classList.contains("has-error")) validateEmail();
});
passwordInput.addEventListener("input", () => {
  if (passwordInput.classList.contains("has-error")) validatePassword();
});

// SHA-256 hash using the browser's native Web Crypto API (SubtleCrypto)
async function sha256(text) {
  const encoded = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", encoded);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const emailOk = validateEmail();
  const passwordOk = validatePassword();

  if (!emailOk || !passwordOk) {
    return;
  }

  submitBtn.disabled = true;
  hashStatus.textContent = "Hashing credentials…";

  try {
    // Hash on the client so the raw password never has to sit in memory,
    // logs, or a request payload longer than necessary. A real backend
    // would still independently salt + hash whatever it receives.
    const [emailHash, passwordHash] = await Promise.all([
      sha256(emailInput.value.trim().toLowerCase()),
      sha256(passwordInput.value),
    ]);

    hashStatus.textContent = "Credentials hashed. Ready to send over HTTPS.";

    // Demo only: in a real app this payload (never the plaintext) is what
    // you'd POST to your auth endpoint, over HTTPS.
    console.log("Demo payload (would be sent over HTTPS):", {
      emailHash,
      passwordHash,
    });

    setTimeout(() => {
      alert("Sign-in payload prepared and hashed successfully (demo only, nothing was sent).");
      submitBtn.disabled = false;
      hashStatus.textContent = "";
    }, 600);
  } catch (err) {
    hashStatus.textContent = "Something went wrong preparing your credentials.";
    submitBtn.disabled = false;
    console.error(err);
  }
});
