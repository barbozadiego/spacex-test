import { useState } from "react";
import Header from "../components/layout/Header";
import LaunchesTable from "../components/common/LaunchesTable";
import Footer from "../components/layout/Footer";
import ShowTableButton from "../components/common/ShowTableButton";

// The Header, LaunchesTable, and Footer components are created to modularize the code, which is the purpose of react, dividing everything into smaller components.

const HomeView = () => {
  const [showTable, setShowTable] = useState(false);

  const handleClick = (): void => {
    setShowTable(true);
  };

  return (
    <>
      {showTable ? (
        <>
          <Header />
          <section className="min-h-[60vh] px-8 md:px-16 lg:px-24 mb-16">
            <h1 className="text-2xl text-gray-900 font-bold mb-6">
              🚀 Launches Table
            </h1>

            <LaunchesTable />
          </section>
          <Footer />
        </>
      ) : (
        <ShowTableButton handleClick={handleClick} />
      )}
    </>
  );
};
export default HomeView;
