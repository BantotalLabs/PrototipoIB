import React from 'react'

import { Balance } from './balance'
import { LastMovements } from './lastMovements'
import { ResumeNumbers } from './resumeNumbers'
import { ResumeMonth } from './resumeMonth'

export const Resume = ({ accounts }) => 
	<div className="resume-container">
		<div className="container"> 
			<section id="position" className="row">
				<Balance actualBalance={ accounts.actualBalance } yesterdayBalance={ accounts.yesterdayBalance } />
				<LastMovements lastMovements={ accounts.lastMovements } />		
			</section>
		</div>
		<ResumeNumbers resumeMonth={ accounts.resumeMonth } />
		<ResumeMonth />
	</div>