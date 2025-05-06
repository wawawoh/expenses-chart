import logo from "./logo.svg";
import Graph from "./components/Graph";

function App() {
  return (
    <main>
      <section className="divider first">
        <div>
          <h1>My balance</h1>
          <h2>$921.98</h2>
        </div>
        <img src="/images/logo.svg" alt="icon" />
      </section>

      <section className="divider">
        <h3>Spending - last 7 days </h3>

        <Graph />
      </section>

      <section className="divider information">
        <div>
          <p className="total">Total this month</p>
          <p className="total-amount"> $478.33</p>
        </div>
        <div>
          <p className="percentage"> +2.4%</p>
          <p className="last-month">from last month</p>
        </div>
      </section>
    </main>
  );
}

export default App;
