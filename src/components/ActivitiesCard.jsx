/* eslint-disable react/prop-types */
const ActivitiesCard = ({ activity, onDelete, className, showDescription }) => {
  return (
    <div
      key={activity.id}
      className={`flex w-[400px] justify-around gap-2 rounded-md bg-gray-200 ${className}`}
    >
      <p className="flex flex-col items-start">
        <span className="font-bold">Activity Name:</span>{" "}
        {activity.activity_name}
      </p>
      <p className="flex flex-col items-start">
        <span className="font-bold">Activity Type:</span>{" "}
        {activity.activity_type}
      </p>
      <p className="flex flex-col items-start">
        <span className="font-bold">Distance:</span> {activity.distance}Km
      </p>
      <p className="flex flex-col items-start">
        <span className="font-bold">Effort:</span> {activity.effort}
      </p>

      {showDescription && (
        <p className="flex flex-col">
          <span className="flex-wrap font-bold">Activity Detail:</span>
          {activity.activity_detail}
        </p>
      )}

      {onDelete && (
        <button
          onClick={() => onDelete(activity.id)}
          className="rounded-md bg-red-500 px-1 py-1 text-white"
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default ActivitiesCard;
