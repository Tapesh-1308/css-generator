const Slider = ({ minValue, maxValue, value, label, onChange, unit="px" }) => {
  return (
    <div className="my-3">
      <div className="flex items-center justify-between">
        <p className="py-1">{label}</p>
        <p className="text-purple-400 font-medium pr-2">{value}{unit}</p>
      </div>

      <input
        type="range"
        className="slider bg-gradient-to-r from-purple-600 to-purple-700 rounded-md appearance-none h-3 w-full"
        min={minValue}
        max={maxValue}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Slider;
