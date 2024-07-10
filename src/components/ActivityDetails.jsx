import { getActivities } from "../services/api";
import { useState, useEffect } from "react";
import ActivitiesCard from "./ActivitiesCard";

const ActivityDetails = () => {
  const [activities, setActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(null);

  const listActivities = async () => {
    try {
      const response = await getActivities();
      setActivities(response.data.data);
    } catch (error) {
      console.error("Error fetching activities: ", error);
    }
  };

  useEffect(() => {
    listActivities();
  }, [activities]);

  const handleSelectChange = (event) => {
    const selectedId = event.target.value;
    const activity = activities.find(
      (activity) => activity.id === parseInt(selectedId),
    );
    setSelectedActivity(activity);
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5">
      <h1 className="text-3xl">Select an activity</h1>
      <div className="flex flex-col items-center justify-center gap-2">
        <select
          className="rounded-md bg-gray-200 px-2 py-2"
          onChange={handleSelectChange}
          defaultValue=""
        >
          <option value="" disabled>
            Select an activity
          </option>
          {activities.map((activity) => (
            <option key={activity.id} value={activity.id}>
              {activity.activity_name}
            </option>
          ))}
        </select>
      </div>
      {selectedActivity && (
        <ActivitiesCard
          className={"m-4 flex-col p-4"}
          activity={selectedActivity}
          showDescription={true}
        />
      )}
    </div>
  );
};

export default ActivityDetails;
