import { useState } from "react";
import Header from "../components/layout/Header";
import LaunchesTable from "../components/common/LaunchesTable";
import Footer from "../components/layout/Footer";
import ShowTableButton from "../components/common/ShowTableButton";

// The Header, LaunchesTable, and Footer components are created to modularize the code, which is the purpose of react, dividing everything into smaller components.

const HomeView = () => {
  // A state is created to manage the visibility of the LaunchesTable component
  const [showTable, setShowTable] = useState(false);

  // The handleClick function is created to change the value of the showTable state to true when the button is clicked.
  // the void type is declared since it is a function that receives no arguments and returns nothing
  const handleClick = (): void => {
    setShowTable(true);
  };

  return (
    // A ternary operator is used to evaluate showTable, when it is true the contents of the section are displayed and when it is false the button is displayed
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
