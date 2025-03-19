import Header from "../components/layout/Header";
import LaunchesTable from "../components/common/LaunchesTable";

const HomeView = () => {
  return (
    <>
      <Header />

      <div className="px-24">
        <h1 className="text-2xl font-bold mb-6">🚀 Launches Table</h1>
        <LaunchesTable />
      </div>
    </>
  );
};
export default HomeView;
