// eslint-disable-next-line react/prop-types
const ModalDelete = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="rounded-md bg-white p-4 shadow-md">
        <h2 className="text-lg font-semibold">Confirm Deletion</h2>
        <p>Are you sure you want to delete this activity?</p>
        <div className="mt-4 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="rounded-md bg-gray-300 px-4 py-2"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="rounded-md bg-red-500 px-4 py-2 text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
