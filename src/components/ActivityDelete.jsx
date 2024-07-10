import { getActivities, deleteActivity } from "../services/api";
import { useState, useEffect } from "react";
import ModalDelete from "./ModalDelete";
import ActivitiesCard from "./ActivitiesCard";

const ActivityDelete = () => {
  const [activities, setActivities] = useState([]);
  const [selectedActivityId, setSelectedActivityId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = (id) => {
    setSelectedActivityId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedActivityId(null);
    setIsModalOpen(false);
  };

  const handleDelete = async () => {
    try {
      await deleteActivity(selectedActivityId);
      closeModal();
    } catch (error) {
      console.error("Error deleting activity: ", error);
    }
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5">
      <h1 className="text-3xl">All Activities</h1>
      <div className="flex flex-col items-center justify-center gap-2">
        {activities.map((activity) => {
          return (
            <ActivitiesCard
              className={"w-[450px] p-2"}
              key={activity.id}
              activity={activity}
              onDelete={openModal}
            />
          );
        })}
      </div>

      <ModalDelete
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default ActivityDelete;
