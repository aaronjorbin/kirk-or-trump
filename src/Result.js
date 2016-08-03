import React, { Component } from 'react';
import ReactGA from 'react-ga';
import DocumentTitle from 'react-document-title';

class Result extends Component {
	constructor( props ) {
		super(props);
		this.calculatePercent = this.calculatePercent.bind(this);
		this.calculatePerson = this.calculatePerson.bind(this);
	}
	calculatePercent(){
		let correct = this.props.score.reduce( ( c, a ) => {
			if ( a ){
				c++;
			}
			return c;
		});
		return Math.round( ( correct / this.props.score.length ) * 100 );
	}
	calculatePerson( percent ){
		if ( 50 < percent ){
			return 'Kirk';
		}
		return 'Trump'
	}
	componentDidMount(){
		// eslint-disable-next-line
		twttr.widgets.load();
		// eslint-disable-next-line
		twttr.events.bind( 'click', function(ev){
			ReactGA.event({
				category: 'Social',
				action: 'Twitter',
			});
		});
}
render() {
	let percent = this.calculatePercent();
	let person = this.calculatePerson( percent );
	let titleString = 'I scored ' + percent + '% on Kirk or Trump.';
	let tweetUrl = 'https://twitter.com/share?text=' + encodeURIComponent( titleString );
	ReactGA.event({
		category: 'complete',
		action: 'finish',
		value: percent
	});
return (
		<div>
			<DocumentTitle title={titleString} />
			<p>
				You got {percent}% correct!  You are a { person }.
				<a href={tweetUrl} className="twitter-share-button" >Tweet</a> 
			</p>
		</div>
	   );
}
}

export default Result;
