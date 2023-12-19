function Error({ error }) {
  return (
    <div className="w-40 flex justify-end border border-red-700">
      <div className="">
        <span className="">{error}</span>
      </div>
    </div>
  );
}
export default Error;
