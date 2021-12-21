import { Header, Footer, ScrollUp, DiscoverMore } from "../main_components";
const MainLayout = ({ children }) => {
  return (
    <>
      <div className="page-wrapper">
        <Header />
        <main>{children}</main>

        <Footer />
      </div>
      <ScrollUp />
    </>
  );
};

export default MainLayout;
