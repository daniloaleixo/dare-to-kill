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
		const newStyle = {...containerStyle, background: this.props.stateName === 'a' ? 'red' : 'green'}
		return (
			<div style={newStyle} 
				onClick={this.handleClick}>
			</div>
			)
	}
})