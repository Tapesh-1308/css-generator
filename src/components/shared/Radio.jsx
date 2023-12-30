const Radio = ({label, name, defaultChecked = false, onChange, value}) => {
  return (
    <>
      <label className="mx-4">
        <input
          className="radio-input whitespace-nowrap overflow-hidden absolute"
          type="radio"
          name={name}
          defaultChecked={defaultChecked}
          onChange={onChange}
          value={value}
        />
        <span className="radio-tile flex flex-col items-center justify-center bg-black cursor-pointer relative hover:border-purple-700">
          <span className="radio-label text-white text-center text-sm">{label}</span>
        </span>
      </label>
    </>
  );
};

export default Radio;
