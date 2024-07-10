import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/v1/sports",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getActivities = () => {
  return api.get("/");
};

export const getActivityById = (id) => {
  return api.get(`/${id}`);
};

export const createActivity = (activityData) => {
  return api.post("/", activityData);
};

export const updateActivity = (id, activityData) => {
  return api.patch(`/${id}`, activityData);
};

export const deleteActivity = (id) => {
  return api.delete(`/${id}`);
};
