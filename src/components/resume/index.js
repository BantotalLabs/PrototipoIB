import React from 'react'

import { Balance } from './balance'
import { LastMovements } from './lastMovements'
import { ResumeNumbers } from './resumeNumbers'
import { ResumeMonth } from './resumeMonth'

export const Resume = () => 
	<div className="resume-container">
		<div className="container"> 
			<section id="position" className="row">
				<Balance />
				<LastMovements />		
			</section>
		</div>
		<ResumeNumbers />
		<ResumeMonth />
	</div>