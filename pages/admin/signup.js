import AdminLayout from "../../components/layout/AdminLayout";
import { useState } from "react";
import { auth } from "../../firebase";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await auth.createUserWithEmailAndPassword(email, password);
      await result.user.updateProfile({
        displayName: name,
      });
      alert(`Welcome ${result.user.displayName}`);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <section className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 amit-style">
              <p className="fs-5 text-center fw-bold">ADMIN REGISTRATION</p>
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="login-form">
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ marginBottom: "20px" }}
                  />
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
                      Register
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

export default Signup;

Signup.getLayout = (Signup) => <AdminLayout>{Signup}</AdminLayout>;
