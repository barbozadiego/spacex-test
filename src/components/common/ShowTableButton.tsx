// The interface is created to tell the prop that the component receives that it is of type void.
interface ShowTableButtonProps {
  handleClick: () => void; // the void type is declared in handleClick since it is a function that receives no arguments and returns nothing
}

const ShowTableButton = ({ handleClick }: ShowTableButtonProps) => {
  return (
    <div className="h-screen flex justify-center items-center px-14">
      <div className="border-2 border-gray-700 py-20 px-14 rounded-2xl">
        <img src="/images/logo.png" alt="logo-spacex" className="w-68 mb-18" />

        <button
          onClick={handleClick}
          className="w-full bg-gray-800 hover:bg-gray-950 cursor-pointer rounded-md py-3 px-5 text-white font-bold"
        >
          Show Launches Table
        </button>
      </div>
    </div>
  );
};
export default ShowTableButton;
