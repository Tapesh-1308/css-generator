const Checkbox = ({ checked, label, onChange }) => {
  return (
    <label className="flex justify-between items-center space-x-2">
      <span className="text-white">{label}</span>
      <input
        type="checkbox"
        className="form-checkbox"
        checked={checked}
        onChange={onChange}
      />
    </label>
  );
};

export default Checkbox;
