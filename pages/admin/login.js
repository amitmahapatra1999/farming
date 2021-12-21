import AdminLayout from "../../components/layout/AdminLayout";
import { useState } from "react";
import { auth } from "../../firebase";
import Router from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      Router.push("/admin");
      alert(`Welcome ${result.user.displayName}`);
    } catch (err) {
      alert("Email Or Password Does Not Exist");
    }
  };
  return (
    <>
      <section className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 amit-style">
              <p className="fs-5 text-center fw-bold">ADMIN LOGIN</p>
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="login-form">
                  <input
                    type="email"
                    placeholder="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ marginBottom: "20px" }}
                  />

                  <input
                    type="password"
                    placeholder="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ marginBottom: "20px" }}
                  />

                  <div className="custom-submit-btn text-center">
                    <button type="submit" className="thm-btn comment-form__btn">
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;

Login.getLayout = (Login) => <AdminLayout>{Login}</AdminLayout>;
