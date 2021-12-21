import AdminLayout from "../../components/layout/AdminLayout";
import { Hero } from "../../components/main_components";
const index = () => {
  return (
    <>
      <Hero name="Dashboard" />
      <h1>Welcome Admin</h1>
    </>
  );
};

export default index;

index.getLayout = (index) => <AdminLayout>{index}</AdminLayout>;
