import { getActivities } from "../services/api";
import { useState, useEffect } from "react";
import ActivitiesCard from "./ActivitiesCard";

const ActivityList = () => {
  const [activities, setActivities] = useState([]);

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

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5">
      <h1 className="text-3xl">All Activities</h1>
      <div className="flex flex-col items-center justify-center gap-2">
        {activities.map((activity) => {
          return (
            <ActivitiesCard
              className={"p-2"}
              key={activity.id}
              activity={activity}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ActivityList;
