import React, { memo } from "react";

const HabitAddForm = memo(props => {
  const InputRef = React.createRef();

  const onSubmit = event => {
    event.preventDefault();
    const name = InputRef.current.value;
    name && props.onAdd(name);

    // 둘 다 가능
    // this.formRef.current.reset();
    InputRef.current.value = "";
  };

  return (
    <div>
      <form className="inputField" onSubmit={onSubmit}>
        <input
          className="inputText"
          type="text"
          placeholder="취미를 입력해주세요"
          ref={InputRef}
        />
        <button className="inputButton">등록</button>
      </form>
    </div>
  );
});

export default HabitAddForm;
