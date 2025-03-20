import { useQuery, gql } from "@apollo/client";

interface LaunchDetailsModal {
  launchId: string;
  setShowModal: (value: boolean) => void;
}

const LaunchDetailsModal = ({ launchId, setShowModal }: LaunchDetailsModal) => {
  const GetLaunch = gql`
    query GetLaunch($id: ID!) {
      launch(id: $id) {
        id
        mission_name
        rocket {
          rocket_name
          rocket_type
        }
        details
      }
    }
  `;

  const { loading, error, data } = useQuery(GetLaunch, {
    variables: { id: launchId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data);

  const launch = data.launch;

  return (
    <div className="flex justify-center items-center fixed inset-0 bg-[rgba(0,0,0,.85)] z-10">
      <div className="w-[80%] h-[80vh] bg-white rounded-md">
        <div className="flex justify-between items-center p-8">
          <h1 className="font-bold text-3xl">{launch.mission_name}</h1>
          <button className="cursor-pointer" onClick={() => setShowModal(false)}>❌</button>
        </div>
      </div>
    </div>
  );
};
export default LaunchDetailsModal;
