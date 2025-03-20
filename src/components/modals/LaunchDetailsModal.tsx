import { useQuery, gql } from "@apollo/client";
import dayjs from "dayjs";

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
        launch_date_utc
        rocket {
          rocket_name
          rocket_type
        }
        details
        links {
          article_link
          video_link
          flickr_images
        }
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
      <button
        onClick={() => setShowModal(false)}
        className="bg-white rounded-full absolute top-5 right-5 md:top-7 md:right-9 p-2 text-md cursor-pointer shadow md:shadow-none"
      >
        ❌
      </button>
      <div className="w-full md:w-[80%] h-screen md:h-[80vh] bg-white rounded-md p-8 overflow-y-auto">
        <hgroup className="mb-4">
          <h1 className="font-bold text-3xl mb-1">{launch.mission_name}</h1>
          <h2 className="text-xl font-semibold mb-2">{`${launch.rocket.rocket_name} / ${launch.rocket.rocket_type}`}</h2>
          <h3>{`Launch Date: ${dayjs(launch.launch_date_utc).format(
            "YYYY-MM-DD HH:mm"
          )}`}</h3>
        </hgroup>

        {launch.links.flickr_images.length >= 1 ? (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(10em,1fr))] gap-4 mb-4">
            {launch.links.flickr_images.map((url: string) => {
              return (
                <img
                  src={url}
                  alt="image-launch"
                  className="w-full aspect-square object-cover"
                />
              );
            })}
          </div>
        ) : (
          <p className="mb-4 text-red-500">There are no images for this launch.</p>
        )}

        <p className="mb-8">
          {launch.details || "There are no details for this launch."}
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          {launch.links.article_link && (
            <a
              href={launch.links.article_link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-950 text-white rounded-md py-2 px-6 cursor-pointer"
            >
              Read article
            </a>
          )}

          {launch.links.video_link && (
            <a
              href={launch.links.video_link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-950 text-white rounded-md py-2 px-6 cursor-pointer"
            >
              Watch video
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
export default LaunchDetailsModal;
