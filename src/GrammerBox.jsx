import { useEffect, useState } from "react";

export default function GrammerBox({ header, mems }) {
  const [currentMemIdx, setCurrentMemIdx] = useState(0);
  const [indicator, setIndicator] = useState(mems.map((_) => "o"));

  useEffect(() => {
    setIndicator((indicatorString) => {
      const wiped = indicatorString.map((_) => "o");
      wiped[currentMemIdx] = "x";
      return wiped;
    });
  }, [currentMemIdx]);

  const cycleMem = (forward) => {
    if (forward) {
      setCurrentMemIdx((current) =>
        current >= mems.length - 1 ? 0 : current + 1,
      );
    } else {
      setCurrentMemIdx((current) =>
        current <= 0 ? mems.length - 1 : current - 1,
      );
    }
  };

  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid gray",
        marginBottom: "10px",
        width: "320px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px",
        }}
      >
        <button onClick={() => cycleMem(false)}>{"<"}</button>
        <div>{indicator}</div>
        <button onClick={() => cycleMem(true)}>{">"}</button>
      </div>
      <h2>{header}</h2>
      <img src={mems[currentMemIdx].imgSrc} width={"300px"} height={"300px"} />
      <div>
        {mems[currentMemIdx].date.toLocaleDateString()}:{" "}
        {mems[currentMemIdx].location}
      </div>
      <div> {mems[currentMemIdx].description} </div>
    </div>
  );
}
