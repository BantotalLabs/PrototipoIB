import React from 'react'

export const Balance = ({ actualBalance, yesterdayBalance }) => 
	<div className="col-lg-4 col-md-4 current-balance">
		<h4 className="text-right">SALDO ACTUAL</h4>
		<p className="text-center balance">{ actualBalance.currency } { actualBalance.amount.toLocaleString() }<span className="balance-decimal">00</span></p>
		<p className="text-right balance-yesterday">AYER { yesterdayBalance.currency } { yesterdayBalance.amount.toLocaleString() }</p>
	</div>