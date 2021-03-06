import React from 'react';
import AppZhuSuItems from 'components/AppZhuSuItems';
import {Link} from 'react-router';

class AppZhuSu extends React.Component{
	render(){
		if(!Array.isArray(this.props.DetailsData)) throw new Error('this.props.DetailsData问题必须是数组');
		
		let ZhuSuItems=this.props.DetailsData.map(function(value,index){
			return (
				<AppZhuSuItems  key={index}
								title={value.title}
								id={index}
								kezhu={value.number}
								suoimgurl={value.pics[0].url}
								price={value.price} 
								handleAppCartDisplay={this.props.handleAppCartDisplay}/>
				);
		}.bind(this));
		
		return (	
			<div className="AppZhuSu">
				<p className="AppZhuSu_tittle">住宿</p>
					{ZhuSuItems}
				<div className="container wqcontainer">
					<Link to="/rooms">查看更多</Link>
				</div>
			</div>	
			);
	}
}

export default AppZhuSu;