import { useQuery, gql } from "@apollo/client";

// The GetLaunches constant is created, which will contain the query
// The gql function is used to process the request text and execute the query.
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

// The LaunchData interface is created, which will act as a Generic in the useQuery hook, which will handle the request and expect the result to have the LaunchData structure, which in turn must be a template structured as Launch.
interface LaunchData {
  launches: Launch[];
}

// The Launch interface is created, which will be responsible for defining the structure that will be used for each launch.
interface Launch {
  // For each property of the object the data type is declared
  id: string;
  launch_date_utc: string;
  mission_name: string;
  mission_id: string[];
}

// The LaunchesTable component is created, which contains a table with the data of all the launches.
const LaunchesTable = () => {
  // {loading, error, data} is destructured from the useQuery hook that the @apollo/client library provides us for handling requests. With this data we can obtain the loading status, the error in case it fails, and the request data if everything goes well.
  const { loading, error, data } = useQuery<LaunchData>(GetLaunches);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // The data is displayed in the console so I can see how the response is structured.
  console.log(data);

  // A basic table is returned with the request data.
  return (
   

      <div className="h-[70vh] overflow-auto border border-gray-900">
        <table className="w-full bg-white">
          <thead className="sticky top-0 z-10">
            <tr className="bg-gray-950 text-gray-200">
              <th className="py-2 px-4 text-left">ID</th>
              <th className="py-2 px-4 text-left">LAUNCH DATE</th>
              <th className="py-2 px-4 text-left">MISSION NAME</th>
              <th className="py-2 px-4 text-left">MISSION ID</th>
            </tr>
          </thead>
          <tbody>
            {/* All the launches are mapped, but first we make sure that "data"
          exists using "?" to avoid possible errors such as undefined or null,
          because this data is obtained through a request, it is not immediately
          available and by not using the "?" symbol we will be trying to access
          a nested value that will not be available, which will give us an
          error. */}
            {data?.launches?.map((launch: Launch, index) => (
              // Here it is declared that each element of the array is of type Launch.
              <tr key={launch.id} className="border-b border-gray-900">
                {/* I also wanted to show the index to show the table more ordered with the numbering. */}
                <td className="py-2 px-4">{index + 1}</td>
                {/* It is worth noting that we use "+ 1" since indexing an array starts at 0 */}
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
