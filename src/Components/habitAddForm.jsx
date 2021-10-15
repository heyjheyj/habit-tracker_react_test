import React, { memo } from 'react';

const HabitAddForm = memo((props) => {
    // formRef = React.createRef();
    const InputRef = React.createRef();

    const onSubmit = (event) => {
        event.preventDefault(); // Refs and the DOM: https://reactjs.org/docs/refs-and-the-dom.html
        const name = InputRef.current.value;
        name && props.onAdd(name);
        // this.formRef.current.reset();
        InputRef.current.value = ''; 
        // 위 방법과 아래 방법 둘 다 가능
    }
    
    return (
        <div>
            <form className="inputField" onSubmit={onSubmit}>
        <input className="inputText" type="text" placeholder="취미를 입력해주세요" ref={InputRef}/>
        <button className="inputButton">등록</button>
    </form>
        </div>
        );
});

export default HabitAddForm;
