// import UseEffect from "./UseEffect";

const Select = ({ title, name, options }) => {
  return (
    <>
      <div>
        <label>{title}</label>
        <select name={name}>
          <option value="tarefa">Selecione sua categoria:</option>
          {options.map((option) => (
            <option value={option.id} key={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Select;
