const Footer = (props) => {
  const { count } = props;

  return (
    <div className="bg-sky-400 text-2xl text-white px-10 py-6">
      <p className="flex flex-wrap items-center justify-center">
        Итого:<span className="mx-2 text-3xl font-semibold">{count}</span>
        наименований
      </p>
    </div>
  );
};

export default Footer;
