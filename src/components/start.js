import { useEffect, useState } from "react";
import Button from "../components/Button.js";


function Start() {
    const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onChange = (event) => {
    setKeyword(event.target.value);
  }
  const onClick = () => setValue((prev) => prev + 1);
  useEffect(()=> {
    console.log("useEffect 안에 있는 건 한번만 실행됩니다.");
  }, []); // []안에 있는 스테이트가 변할 때만 해당 코드를 실행하도록 한다. 빈칸으로 두면 렌더링 시에만 코드를 실행한다.
  useEffect(()=> {
    if(keyword !== "" && keyword.length > 5) {
      console.log("search for", keyword);
    }
  }, [keyword]); // keyword 스테이트가 변경될 때만 useEffect 안에 있는 코드를 실행한다. 그 안에 if문으로 2차 조건을 부여할 수 있다.

  const [showing, setShowing] = useState(false);
  const HelloFn = () => setShowing((prev) => !prev);


    return (
        <div>
            <input onChange={onChange} type="text" placeholder="Search here..." value={keyword}></input>
            <h1 className="title">{counter}</h1>
            <button onClick={onClick}>click me</button>
            <div>
                {showing ? <Hello></Hello> : null}
                <button onClick={HelloFn}>{showing ? "hide" : "show"}</button>
            </div>
        </div>
    )
}

function Hello() {
    useEffect(()=> {
      console.log("생성 될 때 코드");
      return () => console.log("사라질 때 코드"); // 컴포넌트가 사라지거나 파괴될 때 코드를 실행한다, return 값으로 반환한다. api에 결과값을 보내거나 / eventlistener를 지우거나 할 때 사용된다.
      // 이 코드로 컴포넌트가 언제 생성되고 언제 파괴되는지에 대한 것을 알 수 있다.
    }, []);

    // 위의 코드는 useEffect를 사용하여 생성과 파괴때에 실행할 코드를 만드는 방법이다. 아래의 코드와 동일하게 작동된다.

    function 파괴될때() {
      console.log("사라질 때 코드2");
    }

    function 생성될때() {
      console.log("생성 될 때 코드2");
      return 파괴될때;
    }
    useEffect(생성될때, []);
    return <h1>hello</h1>;

    /* useEffect(()=> {
      console.log("hi");
      return () => console.log("bye");
    }, []); */
}

export default Start;