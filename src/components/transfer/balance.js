import React from 'react'

export const BalanceTransfer = ({ amountBalance, resultAmountBalance }) => 
	<div className="col-md-9 col-lg-9 col-sm-12 current-balance hidden-xs">
		<h4 className="text-right">SALDO ACTUAL</h4>
		<p className="text-center balance">$ { amountBalance }<span className="balance-decimal">00</span></p>
		<p className="text-right balance-yesterday">SALDO FINAL $ { resultAmountBalance }</p>
	</div>