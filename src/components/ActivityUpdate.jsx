import { getActivities, updateActivity } from "../services/api";
import { useState, useEffect } from "react";
import ActivityForm from "./ActivityForm";
import { data } from "../utils/data";

const ActivityUpdate = () => {
  const [activities, setActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [formData, setFormData] = useState(data);

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
    setFormData({
      activity_name: activity.activity_name,
      activity_detail: activity.activity_detail,
      activity_type: activity.activity_type,
      distance: activity.distance,
      effort: activity.effort,
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      ...formData,
      distance: Number(formData.distance),
      effort: Number(formData.effort),
    };

    try {
      await updateActivity(selectedActivity.id, data);
      console.log("Form Data Submitted: ", data);
    } catch (error) {
      console.error("Error updating activity: ", error);
    }
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1 className="text-3xl">Select an activity to update</h1>
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
        <ActivityForm
          onChange={handleChange}
          onSubmit={handleSubmit}
          formData={formData}
        />
      )}
    </div>
  );
};

export default ActivityUpdate;
