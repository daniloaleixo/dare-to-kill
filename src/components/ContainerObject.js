import React from 'react'
import './ContainerObject.css'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import happy from '../img/main-qimg-fa13beb8faa5b5ad2b5534932f5c1f7f_happy2.png'
import sad from '../img/main-qimg-fa13beb8faa5b5ad2b5534932f5c1f7f_sad3.png'
import blocked from '../img/main-qimg-fa13beb8faa5b5ad2b5534932f5c1f7f_blocked2.png'
import '../animate.css'
import {Image} from 'react-bootstrap'


const containerImageStyle = {
	width: '3em',
	height: '3em',
	float: 'left',
	clear: 'none',
	margin: '1%'
};

export default React.createClass({
	
	propTypes: {
		index: React.PropTypes.number,
	  	stateName: React.PropTypes.string
	},

	handleClick(e){
		this.props.onClick(this.props.index)
	},

	render() {
		let srcImg = ''
		let imgAnimation = ''

		switch(this.props.stateName){
			case 'down': srcImg = blocked; imgAnimation = 'animated fadeInDown'; break;
			case 'up': srcImg = happy; imgAnimation = 'shakeUpAndDown'; break;
			case 'clicked': srcImg = sad; imgAnimation = 'animated fadeOutDown'; break;
			default: srcImg = blocked
		}
		return (
			<Image src={srcImg} 
					responsive 
					alt="Container Image"
					style={containerImageStyle} 
					className={imgAnimation}
					onClick={this.handleClick}/>
			)
	}
})