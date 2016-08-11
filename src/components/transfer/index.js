import React, { Component } from 'react'

import { FormTransfer } from './form'
import { BalanceTransfer } from './balance'
import { FrequentTransfers } from './frequent'

let saldoActual = 12500
let saldoRestante = saldoActual
export class Transfer extends Component {
	handleChangeAmount(event){
		saldoRestante = saldoActual - event.target.value
		this.forceUpdate()
	}

	render() {
		return (
			<div className="container transfer-container">
				<div className="row container-home"> 
					<div className="col-lg-offset-1 col-md-offset-1 col-md-7 col-lg-7 col-sm-7">
						<FormTransfer changeAmount={ this.handleChangeAmount.bind(this) } />
					</div>
					<div className="col-md-4 col-lg-4 col-sm-4">
						<BalanceTransfer amountBalance={ saldoActual.toLocaleString() } resultAmountBalance={ saldoRestante.toLocaleString() } />
						<FrequentTransfers />
					</div>
				</div>
			</div>
		)
	}
}