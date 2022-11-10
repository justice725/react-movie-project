import { useEffect, useState } from "react";

function CoinTracker() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);

    useEffect( ()=> {
        fetch("https://api.coinpaprika.com/v1/tickers") // get함수로 해당 페이지의 json형식의 데이터를 끌고온다.
        .then( (response) => response.json()) // 끌고오는게 성공하면, 해당 데이터를 response라고 명명하고, 그걸 json이라는 이름의 함수에 저장한다.
        .then( (json) => 
            setCoins(json)); // json 데이터를 state에 저장한다.
            setLoading(false); // 저장이 다 되었으니, 페이지 로딩을 알리는 텍스트를 삭제한다.
    }, []) // 페이지 로딩시 한번만 실행한다.

    return (
        <div>
            <h1>The Coins! { loading ? "" : `(${coins.length})`}</h1>
                { loading ? (<strong>Loading...</strong>
            ) : (
                <select>
                    {
                    coins.map((indi)=>{
                        <option>
                            {indi.name} ({indi.symbol}): ${indi.quotes.USD.price} USD
                        </option>
                    })
                    }
                </select>
            ) }
            {/* 페이지 로딩시 코인 데이터들을 api형식으로 끌고오는데, 끌고 오는 것이 진행될 때는 loading을 보여주고, 다 끌고오면 사라지게 한다 */}
            {/* <ul>
                {coins.map((indi)=>{ // 끌고온 데이터를 맵함수를 사용하여 모든 데이터를 보이도록 한다. indi라는 함수명을 사용해서 각각의 어레이에 해당하는 데이터를 보여준다.
                    <li>
                        {indi.name} ({indi.symbol}): ${indi.quotes.USD.price} USD
                    </li>
                })
                // ul은 텍스트 형식으로 보여지기 때문에 길이가 길어진다. 따라서, 셀렉트 박스 형식으로 만들어서
                // 사용자의 아이디에 저장된 달러를 가지고 있다는 표시와, 그 달러로 셀렉트 박스 안에 있는 코인들을 얼마를 살 수 있다는 
                // 변환값을 보여주는 input을 보여주면 좋을거 같다. 다음에 챌린지로 만들어보자
                }
            </ul>  */}

             
        </div>
    )
}

export default CoinTracker;