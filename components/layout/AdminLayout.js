import { AdminNav, Footer, ScrollUp } from "../main_components";
import { auth } from "../../firebase";
import { useState, useEffect } from "react";

const AdminLayout = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  return (
    <>
      <div className="page-wrapper">
        <AdminNav user={user} />
        <main>{children}</main>
        <Footer />
      </div>
      <ScrollUp />
    </>
  );
};

export default AdminLayout;
