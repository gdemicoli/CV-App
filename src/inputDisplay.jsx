function InputDisplay({ func, value }) {
  return (
    <div>
      <h1>Hello</h1>
      <input value={value} onInput={(event) => func(event.target.value)} />
    </div>
  );
}

export default InputDisplay;
