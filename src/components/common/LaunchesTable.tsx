import { useQuery, gql } from "@apollo/client";

const GetLaunches = gql`
  query GetLaunches {
    launches {
      id
      launch_date_utc
      mission_name
      mission_id
    }
  }
`;

interface LaunchData {
  launches: Launch[];
}

interface Launch {
  id: string;
  launch_date_utc: string;
  mission_name: string;
  mission_id: string[];
}

const LaunchesTable = () => {
  const { loading, error, data } = useQuery<LaunchData>(GetLaunches);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  {
    console.log(data);
  }

  return (
    <div className="h-[70vh] overflow-auto rounded-md border border-gray-300">
      <table className="w-full bg-white">
        <thead className="sticky top-0 z-10">
          <tr className="bg-gray-200 text-gray-700">
            <th className="py-2 px-4 text-left">ID</th>
            <th className="py-2 px-4 text-left">LAUNCH DATE</th>
            <th className="py-2 px-4 text-left">MISSION NAME</th>
            <th className="py-2 px-4 text-left">MISSION ID</th>
          </tr>
        </thead>
        <tbody>
          {data?.launches?.map((launch: Launch, index) => (
            <tr key={launch.id} className="border-b border-gray-200">
              <td className="py-2 px-4">{index + 1}</td>
              <td className="py-2 px-4">{launch.launch_date_utc}</td>
              <td className="py-2 px-4">{launch.mission_name}</td>
              <td className="py-2 px-4">{launch.mission_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default LaunchesTable;
