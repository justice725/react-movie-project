import { useState } from "react";

function Todolist() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]); // 여러개의 todo값을 받을 수 있도록 비어 있는 array 형식으로 만든다.
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault(); // submit 버튼을 누르면 
        if(toDo === "") {
            return;
        }// 비어있으면 return 시키기
        setToDos((currentArray) => [toDo, ...currentArray]); // 현재 입력한 toDo를 toDos 어레이에 추가한다. 실행을 계속할 때마다 어레이가 증가한다.
        setToDo(""); // 정상 작동되면 input value 빈칸으로 만들기
        
    }
    // .map 함수는 현재 해당하는 array를 변경하는 함수이다. 이 함수는 모든 array에 한번씩 작동하기 때문에 6개의 array가 있으면 6번 작동한다.
    // map 함수는 현재 함수의 array값을 리턴할 수 있기 때문에 현재 array값을 item으로 리턴시켰다. 
    // 이 변형된 array 값은 고유의 key값을 가져야 하는데, 이 고유의 값을 위해서 index라는 값을 생성해서 오류를 없앴다.
    return(
        <div>
            <h1>My To Do Lists ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..."></input>
                <button>Add To Do</button>
            </form>
            <hr></hr>
            <ul>
                {toDos.map((item, index)=> (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            
        </div>
        
    )
}

export default Todolist;