const LaunchesTableSkeleton = () => {
  return (
    <div className="animate-pulse space-y-3">
      <div className="bg-gray-400 py-5 rounded-sm"></div>
      {Array.from(new Array(7)).map((_, index) => (
        <div key={index} className="bg-gray-300 py-5 rounded-sm"></div>
      ))}
    </div>
  );
};
export default LaunchesTableSkeleton;
