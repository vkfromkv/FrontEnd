const Dropdown = (props) => {
  return (
    <>
      <form>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-haspopup="listbox"
            aria-expanded="false"
          >
            {props.name}
          </button>
          <ul className="dropdown-menu" role="listbox">
            {props.children}
          </ul>
        </div>
      </form>
    </>
  );
};
export default Dropdown;
