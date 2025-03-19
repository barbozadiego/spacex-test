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

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  {
    console.log(data);
  }

  return (
    <table className="border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          <th className="">ID</th>
          <th className="">LAUNCH DATE</th>
          <th className="">MISSION NAME</th>
          <th className="">MISSION ID</th>
        </tr>
      </thead>
      <tbody>
        {data?.launches?.map((launch: Launch) => (
          <tr key={launch.id}>
            <td>{launch.id}</td>
            <td>{launch.launch_date_utc}</td>
            <td>{launch.mission_name}</td>
            <td>{launch.mission_id}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default LaunchesTable;
