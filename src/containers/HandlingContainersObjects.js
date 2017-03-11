import React from 'react'
import ContainerObject from '../components/ContainerObject'

const style = {
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent:'space-between'
}

const NUM_CONTAINERS = 10;

export default React.createClass({
	getInitialState() {
		const containersStateAux = []
		for(let i = 0; i < NUM_CONTAINERS; i++)
		{
			containersStateAux.push({
				index: i,
				stateName: 'a'
			})
		}
		return { containersState: containersStateAux}
	},
	handleClick(index){
		const prevContainersState = this.state.containersState;
		prevContainersState[index].stateName = prevContainersState[index].stateName === 'a' ? 'b' : 'a'
		this.setState({prevContainersState})
	},
	render(){
		return (
			<div style={style}>
				{
					this.state.containersState.map( (containerState) => {
					return (
						<ContainerObject 
							stateName={containerState.stateName}
							index={containerState.index}
							onClick={this.handleClick}/>
						)
					} )
				}
			</div>
			)
	}
})