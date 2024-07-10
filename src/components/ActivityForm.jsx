/* eslint-disable react/prop-types */
const ActivityForm = ({ onSubmit, onChange, formData }) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <div className="flex flex-col">
        <label htmlFor="activity_name">Nome da Atividade</label>
        <input
          className="rounded-md border-2 border-gray-500 p-1"
          type="text"
          min={1}
          max={10}
          id="activity_name"
          name="activity_name"
          value={formData.activity_name}
          onChange={onChange}
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="activity_type">Tipo da Atividade</label>
        <input
          className="rounded-md border-2 border-gray-500 p-1"
          type="text"
          min={1}
          max={10}
          id="activity_type"
          name="activity_type"
          value={formData.activity_type}
          onChange={onChange}
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="distance">Distância em Km</label>
        <input
          className="rounded-md border-2 border-gray-500 p-1"
          type="number"
          id="distance"
          name="distance"
          value={formData.distance}
          onChange={onChange}
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="effort">Esforço {`(de 1 a 10)`}</label>
        <input
          className="rounded-md border-2 border-gray-500 p-1"
          type="number"
          id="effort"
          name="effort"
          min={1}
          max={10}
          value={formData.effort}
          onChange={onChange}
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="activity_detail">Descrição da Atividade</label>
        <textarea
          className="rounded-md border-2 border-gray-500 p-1"
          id="activity_detail"
          name="activity_detail"
          value={formData.activity_detail}
          onChange={onChange}
          rows={4}
          cols={40}
        />
      </div>

      <button
        className="rounded-md bg-black p-2 text-white transition-colors duration-300 ease-in-out hover:bg-gray-800"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default ActivityForm;
