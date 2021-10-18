import React from "react";
import "./StyleSheets/App.css";
import { BiUserCircle, BiMenu } from "react-icons/bi";
import { BsBell, BsGithub } from "react-icons/bs";

const App = () => {
	return (
		<div className="page">
			<div className="nav">
				<div className="nav-items">
					<BiMenu size={"2em"} />
					<BsGithub size={"2em"} />
					<BsBell size={"1.5em"} />
				</div>
			</div>
			<div className='content'>
			<div className="repositories">
				<div className='subtitle'>
				<h4>Repositories</h4>
				</div>
				<div className='content-container'>
				<input
					placeholder="Find a repository..."
					className="repo-searchbar"
				/>
				<span className="repo">
					{" "}
					<BiUserCircle size={"1.2em"} /> ethanmcneal / baby-names
				</span>
				<span className="repo">
					{" "}
					<BiUserCircle size={"1.2em"} /> ethanmcneal / EthansEzShop{" "}
				</span>
				<span className="repo">
					{" "}
					<BiUserCircle size={"1.2em"} /> ethanmcneal /
					UdemyAdvancedReactAndReduxTesting{" "}
				</span>
				<span className="repo">
					{" "}
					<BiUserCircle size={"1.2em"} /> ethanmcneal / Brainteasers{" "}
				</span>
				<span className="repo">
					{" "}
					<BiUserCircle size={"1.2em"} /> ethanmcneal / MealsApp{" "}
				</span>
				<span className="repo">
					{" "}
					<BiUserCircle size={"1.2em"} /> ethanmcneal / BudgetApp
				</span>
				<div className="show-more" id="activity-info">
					Show more
				</div>
				</div>
				<div className="subtitle">
				<h4>Recent Activity</h4>
			</div>
			<div className="activity">
				<div className="content-container" id="activity-info">
					When you take actions across GitHub, we’ll provide links to
					that activity here.
				</div>
			</div>
			</div>
			<div className="activity">
			<div className="subtitle">
				<h4>All Activity</h4>
			</div>
				<div className="activity-card">
					<div className="title">
						<span className="repo-link">
							{" "}
							<BiUserCircle size={"1.5em"} /> Ethan McNeal created
							a repository ethanmcneal/homework-review
						</span>
						<span id="activity-info">Today</span>
					</div>
					<div className="repo-card">
						<div className="repo-card-left">
							<span className="repo-link">
								ethanmcneal/homework-review
							</span>
							<span id="activity-info">Responsive styling</span>
							<span id="activity-info">Today</span>
						</div>
						<div>
							<button>star</button>
						</div>
					</div>
				</div>
				<div className="activity-card">
					<div className="title">
						<span className="repo-link">
							{" "}
							<BiUserCircle size={"1.5em"} /> Ethan McNeal created
							a repository ethanmcneal/homework-review
						</span>
						<span id="activity-info">Today</span>
					</div>
					<div className="repo-card">
						<div className="repo-card-left">
							<span className="repo-link">
								ethanmcneal/homework-review
							</span>
							<span id="activity-info">Responsive styling</span>
							<span id="activity-info">Today</span>
						</div>
						<div>
							<button>star</button>
						</div>
					</div>
				</div>
				<div className="activity-card">
					<div className="title">
						<span className="repo-link">
							{" "}
							<BiUserCircle size={"1.5em"} /> Ethan McNeal created
							a repository ethanmcneal/homework-review
						</span>
						<span id="activity-info">Today</span>
					</div>
					<div className="repo-card">
						<div className="repo-card-left">
							<span className="repo-link">
								ethanmcneal/homework-review
							</span>
							<span id="activity-info">Responsive styling</span>
							<span id="activity-info">Today</span>
						</div>
						<div>
							<button>star</button>
						</div>
					</div>
				</div>
				<div className="activity-card">
					<div className="title">
						<span className="repo-link">
							{" "}
							<BiUserCircle size={"1.5em"} /> Ethan McNeal created
							a repository ethanmcneal/homework-review
						</span>
						<span id="activity-info">Today</span>
					</div>
					<div className="repo-card">
						<div className="repo-card-left">
							<span className="repo-link">
								ethanmcneal/homework-review
							</span>
							<span id="activity-info">Responsive styling</span>
							<span id="activity-info">Today</span>
						</div>
						<div>
							<button>star</button>
						</div>
					</div>
				</div>
				<div className="activity-card">
					<div className="title">
						<span className="repo-link">
							{" "}
							<BiUserCircle size={"1.5em"} /> Ethan McNeal created
							a repository ethanmcneal/homework-review
						</span>
						<span id="activity-info">Today</span>
					</div>
					<div className="repo-card">
						<div className="repo-card-left">
							<span className="repo-link">
								ethanmcneal/homework-review
							</span>
							<span id="activity-info">Responsive styling</span>
							<span id="activity-info">Today</span>
						</div>
						<div>
							<button>star</button>
						</div>
					</div>
				</div>
				<div className="activity-card">
					<div className="title">
						<span className="repo-link">
							{" "}
							<BiUserCircle size={"1.5em"} /> Ethan McNeal created
							a repository ethanmcneal/homework-review
						</span>
						<span id="activity-info">Today</span>
					</div>
					<div className="repo-card">
						<div className="repo-card-left">
							<span className="repo-link">
								ethanmcneal/homework-review
							</span>
							<span id="activity-info">Responsive styling</span>
							<span id="activity-info">Today</span>
						</div>
						<div>
							<button>star</button>
						</div>
					</div>
				</div>
				
				</div>
			</div>
			</div>
	);
};

export default App;