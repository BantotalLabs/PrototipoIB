import React from 'react'

export const LastMovements = ({ lastMovements }) => 
	<div className="col-lg-7 col-md-7">
		<h4 className="text-left"><strong>ÚLTIMOS MOVIMIENTOS</strong></h4>
		<table className="table"> 
			<tbody> 
		        {
		        	lastMovements.map(function(item, index) {
		        		if(index <= 4){
							return( <tr key={index}> 
								<td>{ item.type === 'D' ? <i className="fa fa-circle debit-icon-mov"></i> : <i className="fa fa-circle credit-icon-mov"></i> } { item.date } { item.hour }hs</td> 
								<td>{ item.description }</td> 
								<td className="text-right">{ item.value.currency } { item.value.amount.toLocaleString() }</td> 
							</tr>) 
		        		}
		        		return null
		        	})		
		        }						
			</tbody> 
		</table>
		<a href="#" className="pull-right">ver todos</a>
	</div>