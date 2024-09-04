import "./App.css";
import { getFooterCopy, getFullYear } from "./utils";

function App() {
	return (
		<div className="App">
			<div className="App-header">
				<img src="./175b85183ecedb529e14.jpg" alt="logo" width={"200px"} />
				<h1>School dashboard</h1>
			</div>

			<div className="App-body">
				<p>Login to access the full dashboard</p>
				<div>
					<div>
						<label for="email">Email:</label>
						<input type="email" id="email" />
					</div>

					<div>
						<label for="password">Password:</label>
						<input type="password" id="password" />
					</div>

					<div>
						<button>OK</button>
					</div>
				</div>
			</div>

			<div className="App-footer">
				<p>
					Copyright {getFullYear()} - {getFooterCopy(true)}
				</p>
			</div>
		</div>
	);
}

export default App;
