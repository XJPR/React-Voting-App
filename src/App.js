import React,{Component} from 'react';
import './App.css';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			languages : [
				{name: "Php", votes: 0},
				{name: "Python", votes: 0},
				{name: "Go", votes: 0},
				{name: "Java", votes: 0}
			]
		}
	}

	increaseVote (i) {
		let newLanguages = [...this.state.languages];
		newLanguages[i].votes++;
		function swap(array, i, j) {
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
	
		this.setState({languages: newLanguages});
		
	}

	decreaseVote (i) {
		let newLanguages = [...this.state.languages];
		function swap(array, i, j) {
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
			
		}
		this.setState({languages: newLanguages});
		
	}

	render(){
		return(
			<>
				<h1>Vote Your Language!</h1>
				<div className="languages">
					{
						this.state.languages.map((lang, i) => 
							<div key={i} className="language">
								<div className="voteCount">
									{lang.votes}
								</div>
								<div className="languageName">
									{lang.name}
								</div>
								<button onClick={this.increaseVote.bind(this, i)}>Increase Vote</button>
								<button onClick={this.decreaseVote.bind(this, i)}>Decrease Vote</button>
							</div>
						)
					}
				</div>
			</>
		);
	}
}
export default App;