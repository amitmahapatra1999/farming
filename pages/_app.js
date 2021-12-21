import MainLayout from "../components/layout/MainLayout";
import { auth } from "../firebase";
import { useEffect, useState } from "react";
export default function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) setUser(user);
    });
  });
  const getLayout =
    Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>);

  return getLayout(<Component {...pageProps} user={user} />);
}
