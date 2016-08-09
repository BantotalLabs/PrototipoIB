import React from 'react'
import { Button, Table } from 'react-bootstrap'

export const FrequentTransfers = () => 
	<div className="col-md-10 col-lg-10 col-sm-12 hidden-xs frequent">
		<h4 className="text-right">transferencias frecuentes</h4>
		<Table responsive className="table">
			<tbody>								      								 
				<tr>
					<td>a pablo</td> 
					<td><Button bsStyle="link" bsSize="xsmall" block>REPETIR</Button></td> 
				</tr>				
				<tr>
					<td>internet casa</td> 
					<td><Button bsStyle="link" bsSize="xsmall" block>REPETIR</Button></td> 
				</tr>													      						      
			</tbody>
		</Table>						
	</div>