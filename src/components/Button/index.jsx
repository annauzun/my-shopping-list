const Button = (props) => {
  const { title, handleClick } = props;

  return (
    <button
      className="border border-solid rounded-lg text-lg px-4 py-2 shadow-md hover:bg-sky-400"
      onClick={(event) => handleClick(event)}
    >
      {title}
    </button>
  );
};
export default Button;
