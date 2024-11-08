import "./App.css";
import GrammerBox from "./GrammerBox";
// import test from "./assets/test.jpg";
import aerial from "./assets/aerial.jpg";
import { CONTENT } from "./topContent";
import MyThree from "./Three";

function App() {
  return (
    <>
      <header
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>{"LR <3 IQ"}</h1>
        <h2>Happy 7 Years!</h2>
        <MyThree />
      </header>
      <hr
        style={{
          border: "1px solid gray",
          marginTop: "100px",
        }}
      />
      <section
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1> Top 7 Reasons I Love Being With You </h1>
        {CONTENT.map(({ header, mems }, idx) => (
          <GrammerBox key={`grammerBox-${idx}`} header={header} mems={mems} />
        ))}
      </section>
      <hr
        style={{
          border: "1px solid gray",
          marginTop: "100px",
        }}
      />
      <div>
        <h1>{"Here's to another year. Love you forever, L"}</h1>
        <img src={aerial} width={"300px"} height={"300px"} />
      </div>
    </>
  );
}

export default App;
