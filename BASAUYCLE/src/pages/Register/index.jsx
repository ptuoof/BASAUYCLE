import {
  TextField,
  Button as MUIButton,
  Divider,
  Checkbox,
  FormControlLabel
} from "@mui/material";
import Header from "../../component/header";

export default function Register() {
  return (
    <>
      <Header />

      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <section
          className="w-full max-w-md rounded-3xl bg-white shadow-lg"
          aria-labelledby="register-heading"
        >
          {/* Title */}
          <header className="px-8 pt-10 text-center">
            <h1
              id="register-heading"
              className="text-3xl font-bold text-gray-900"
            >
              Create Your Account
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Join the community for buying, selling, and inspecting bicycles.
            </p>
          </header>

          {/* Form */}
          <form className="px-8 py-8 space-y-6">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Full Name
              </label>
              <TextField
                fullWidth
                placeholder="e.g. John Doe"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Email Address
              </label>
              <TextField
                fullWidth
                type="email"
                placeholder="name@email.com"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <TextField
                fullWidth
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Password
                </label>
                <TextField
                  fullWidth
                  type="password"
                  placeholder="8+ characters"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <TextField
                  fullWidth
                  type="password"
                  placeholder="Repeat password"
                />
              </div>
            </div>

            <FormControlLabel
              control={<Checkbox />}
              label={
                <span className="text-sm text-gray-600">
                  I agree to the{" "}
                  <a href="#" className="text-emerald-500 hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-emerald-500 hover:underline">
                    Privacy Policy
                  </a>.
                </span>
              }
            />

            <MUIButton
              fullWidth
              size="large"
              variant="contained"
              className="!bg-emerald-500 hover:!bg-emerald-600 !rounded-xl !py-3"
            >
              Create Account
            </MUIButton>

            <Divider className="!text-sm !text-gray-400">
              OR SIGN UP WITH
            </Divider>

            <div className="grid grid-cols-2 gap-4">
              <MUIButton
                variant="outlined"
                fullWidth
                className="!rounded-xl !py-3"
              >
                Google
              </MUIButton>

              <MUIButton
                variant="outlined"
                fullWidth
                className="!rounded-xl !py-3"
              >
                Facebook
              </MUIButton>
            </div>
          </form>

          {/* Footer */}
          <footer className="px-8 pb-8 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-medium text-emerald-500 hover:underline"
            >
              Log In
            </a>
          </footer>
        </section>
      </main>
    </>
  );
}
