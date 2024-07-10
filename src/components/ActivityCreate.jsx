import { useState } from "react";
import { createActivity } from "../services/api";
import ActivityForm from "./ActivityForm";
import { data } from "../utils/data";

const ActivityCreate = () => {
  const [formData, setFormData] = useState(data);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      ...formData,
      distance: Number(formData.distance),
      effort: Number(formData.effort),
    };

    try {
      const response = await createActivity(dataToSend);
      console.log("Form Data Submitted: ", response.data);
    } catch (error) {
      console.error("Error creating activity: ", error);
    }

    setFormData(data);
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5">
      <h1 className="text-3xl">Create Activity</h1>
      <ActivityForm
        onChange={handleChange}
        onSubmit={handleSubmit}
        formData={formData}
      />
    </div>
  );
};

export default ActivityCreate;
