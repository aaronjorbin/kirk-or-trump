import React, { Component } from 'react';
import './App.css';
import Questions from './Questions';
import Result from './Result';
import DocumentTitle from 'react-document-title';

// http://stackoverflow.com/a/12646864
function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}

var questions = shuffleArray( [
		{
		'q': 'Worlds may change, galaxies disintegrate, but a woman... always remains a woman.',
		'who': 'kirk'
		},
		{
		'q': "Stay out of this. We're fighting over a woman.",
		'who': 'kirk'
		},
		{
		'q': "If only she could have accepted her limitations as a woman.",
		'who': 'kirk'
		},
		{
		'q': "It doesn't really matter what they write as long as you've got a young and beautiful piece of ass.",
		'who': 'trump'
		},
		{
		'q': "Beauty and elegance, whether in a woman, a building, or a work of art, is not just superficial or something pretty to see.",
		'who': 'trump'
		},
{
	'q': "A little suffering is good for the soul.",
	'who': 'kirk'
},
{
	'q': "Beauty\u2026survives.",
	'who': 'kirk'
},
{
	'q': "When I think I’m right, nothing bothers me.",
	'who': 'trump'
}
] );


class App extends Component {
	constructor( props ) {
		super(props);
		this.state = {
			'responses': []
		}
		this.handleResponse = this.handleResponse.bind( this );
	}
	handleResponse(e){	
		let responses = this.state.responses;
		responses.push( e );
		this.setState({'responses':responses});
	}
	render() {
		return (
				<div className="App">
					<DocumentTitle title="Kirk or Trump" />
					<div className="App-header">
						<h1>Kirk Or Trump?</h1>
						<p>Made With &#9825; by <a href="http://aaron.jorb.in">Aaron Jorbin</a> </p>
					</div>
					<h2>Instructions</h2>
					<p>Read the quote and click on the picture for the person you think said it</p>
					{ questions.map( ( question, i ) => {
						return <Questions q={question} h={this.handleResponse} key={i} />
						}) }
					{ questions.length <= this.state.responses.length ?
						<Result score={this.state.responses} /> :
						null
					}
				</div>
			   );
	}
}

export default App;
