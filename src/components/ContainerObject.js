import React from 'react'


const containerStyle = {
	width: '3em',
	height: '3em',
	float: 'left',
	clear: 'none',
	margin: '1%'
}

export default React.createClass({
	
	propTypes: {
		index: React.PropTypes.number,
	  	stateName: React.PropTypes.string
	},

	handleClick(e){
		this.props.onClick(this.props.index)
	},

	render() {
		let backgroundColor = ''

		switch(this.props.stateName){
			case 'a': backgroundColor = 'red'; break;
			case 'b': backgroundColor = 'green'; break;
			case 'c': backgroundColor = 'blue'; break;
			default: backgroundColor = 'black'
		}
		const newStyle = {...containerStyle, background: backgroundColor}
		return (
			<div style={newStyle} 
				onClick={this.handleClick}>
			</div>
			)
	}
})