import Header from "../components/layout/Header";
import LaunchesTable from "../components/common/LaunchesTable";

// The Header, LaunchesTable, and Footer components are created to modularize the code, which is the purpose of react, dividing everything into smaller components.

const HomeView = () => {
  return (
    <>
      <Header />

      <div className="px-24">
        <h1 className="text-2xl text-gray-700 font-bold mb-6">🚀 Launches Table</h1>
        <LaunchesTable />
      </div>
    </>
  );
};
export default HomeView;
