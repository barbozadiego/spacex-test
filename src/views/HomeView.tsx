import Header from "../components/layout/Header";
import LaunchesTable from "../components/common/LaunchesTable";
import Footer from "../components/layout/Footer";

// The Header, LaunchesTable, and Footer components are created to modularize the code, which is the purpose of react, dividing everything into smaller components.

const HomeView = () => {
  return (
    <>
      <Header />

      <div className="px-24 mb-16">
        <h1 className="text-2xl text-gray-900 font-bold mb-6">
          🚀 Launches Table
        </h1>
        <LaunchesTable />
      </div>

      <Footer />
    </>
  );
};
export default HomeView;
