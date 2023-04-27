import { useEffect, useState } from "react";

function Cleanup() {
  const [showing, setShowing] = useState(false);

  const onClick = () => setShowing((prev) => !prev);

  //   function Hello() {
  //     useEffect(() => {
  //       console.log("created ahahaha");
  //       return () => console.log("destroyed hehehe");
  //     }, []);
  //     return <h1>Hello</h1>;
  //   }

  function PrettyHello() {
    function byeFn() {
      console.log("byeeee hehehe");
    }
    function hiFn() {
      console.log("created ahahaha");
      //() 빼야함. 안빼면 그냥 바로 실행해버림 ㅠ
      return byeFn;
    }
    useEffect(hiFn, []);
  }

  return (
    <div>
      {/* {showing ? <PrettyHello /> : null} */}
      <button onClick={onClick}>{showing ? "Hide" : "Show"} </button>
    </div>
  );
}

export default Cleanup;
