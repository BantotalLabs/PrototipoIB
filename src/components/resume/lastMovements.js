import React from 'react'

const ultimosMovimientos = [
	{
		fecha: '30/07/2016',
		hora: '22:00',
		tipo: 'D',
		descripcion: 'Retiro desde cajero',
		valor: { moneda: '$', importe: 4000}
	},
	{
		fecha: '23/07/2016',
		hora: '22:00',
		tipo: 'D',
		descripcion: 'Retiro desde cajero',
		valor: { moneda: '$', importe: 2000}
	},
	{
		fecha: '22/07/2016',
		hora: '22:00',
		tipo: 'D',
		descripcion: 'Retiro desde cajero',
		valor: { moneda: '$', importe: 500}
	}, 
	{
		fecha: '01/07/2016',
		hora: '13:43',
		tipo: 'C',
		descripcion: 'Salario',
		valor: { moneda: '$', importe: 30000}
	},
	{
		fecha: '22/06/2016',
		hora: '22:00',
		tipo: 'D',
		descripcion: 'Retiro desde cajero',
		valor: { moneda: '$', importe: 700}
	}
]

export const LastMovements = () => 
	<div className="col-lg-7 col-md-7">
		<h4 className="text-left"><strong>ÚLTIMOS MOVIMIENTOS</strong></h4>
		<table className="table"> 
			<tbody> 
		        {
		        	ultimosMovimientos.map(function(item, index) {
		        		if(index <= 4){
							return( <tr key={index}> 
								<td>{ item.tipo === 'D' ? <i className="fa fa-circle debit-icon-mov"></i> : <i className="fa fa-circle credit-icon-mov"></i> } { item.fecha } { item.hora }hs</td> 
								<td>{ item.descripcion }</td> 
								<td className="text-right">{ item.valor.moneda } { item.valor.importe.toLocaleString() }</td> 
							</tr>) 
		        		}
		        		return null
		        	})		
		        }						
			</tbody> 
		</table>
		<a href="#" className="pull-right">ver todos</a>
	</div>