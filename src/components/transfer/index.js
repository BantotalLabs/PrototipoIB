import React from 'react'

import { FormTransfer } from './form'
import { BalanceTransfer } from './balance'
import { FrequentTransfers } from './frequent'

export const Transfer = () => 
	<div className="container transfer-container">
		<div className="row container-home"> 
			<div className="col-lg-offset-1 col-md-offset-1 col-md-7 col-lg-7 col-sm-7">
				<FormTransfer />
			</div>
			<div className="col-md-4 col-lg-4 col-sm-4">
				<BalanceTransfer />
				<FrequentTransfers />
			</div>
		</div>
	</div>