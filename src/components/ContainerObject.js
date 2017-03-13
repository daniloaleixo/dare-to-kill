import React from 'react'
import './ContainerObject.css'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import happy from '../main-qimg-fa13beb8faa5b5ad2b5534932f5c1f7f_happy2.png'
import sad from '../main-qimg-fa13beb8faa5b5ad2b5534932f5c1f7f_sad3.png'
import blocked from '../main-qimg-fa13beb8faa5b5ad2b5534932f5c1f7f_blocked2.png'
import '../animations.css'


const containerImage = {
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
		console.log('clicked')
	},

	render() {
		let srcImg = ''

		switch(this.props.stateName){
			case 'down': srcImg = blocked; break;
			case 'up': srcImg = happy; break;
			case 'clicked': srcImg = sad; break;
			default: srcImg = blocked
		}
		return (
			// <div className='containerStyle' style={{background: backgroundColor}} 
				// onClick={this.handleClick}>
			// </div>
				<img src={srcImg} 
					style={containerImage} 
					className="slideUp"
					onClick={this.handleClick}/>
			)
	}
})