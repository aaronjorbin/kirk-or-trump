import React, { Component } from 'react';
import kirk from './kirk.jpg';
import trump from './trump.jpg';
import ReactGA from 'react-ga';
import './Questions.css';

class Question extends Component {
	constructor( props ) {
		super(props);
		this.state = {
			'selected': false
		}
		this.handleResponse = this.handleResponse.bind( this );
	}
	handleResponse(e){	
		let result = e.target.alt === this.props.q.who;
		e.preventDefault();
		if ( this.state.selected ){
			return;
		}
		this.setState({'selected': e.target.alt});
		this.props.h( result );
		ReactGA.event({
			category: 'Answer',
			action: this.props.q.q,
			label: e.target.alt
		});
}
render() {
	let wrapperClassName = this.state.selected ? 'done question' : 'question';
	if ( this.state.selected && this.state.selected === this.props.q.who ){
		wrapperClassName += ' correct';
	} else if ( this.state.selected && this.state.selected !== this.props.q.who ){
		wrapperClassName += ' wrong';
	}
	return (
			<div className={wrapperClassName}>
				<h2>Quote:</h2>
				<p>
					{this.props.q.q}
				</p>	
				<h2>Who Said it?</h2>
				<a href="#kirk" onClick={this.handleResponse} data={this.props.q} >
					<img src={kirk} alt="kirk" />
				</a>
				<a href="#trump" onClick={this.handleResponse} data={this.props.q} >
					<img src={trump} alt="trump" />
				</a>
			</div>
		   );
}
}

export default Question;
