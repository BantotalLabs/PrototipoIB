import React from 'react'
import { Pie } from 'react-chartjs-2'

const data = {
    labels: [
        "INGRESOS",
        "GASTOS"
    ],
    datasets: [
        {
            data: [11200, 23400],
            backgroundColor: [
                "#93c12e",
                "#ea685f"
            ],
            hoverBackgroundColor: [
                "#93c12e",
                "#ea685f"
            ]
        }]
}

export const ResumeNumbers = () => 
	<section id="resumeNumbers" className="row numbers">
		<div className="container">
			<div className="col-lg-9 col-md-7 col-sm-6">
				<h3>RESUMEN DEL ÚLTIMO MES</h3>
				<div className="credit-debit">
					<div className="col-lg-6">
						<p>INGRESOS</p>
						<p className="credit-value"><i className="fa fa-plus-circle fa-2x credit-icon"></i>$ 11.200<span className="balance-decimal">00</span></p>
					</div>
					<div className="col-lg-6">
						<p>GASTOS</p>
						<p className="debit-value"><i className="fa fa-minus-circle fa-2x debit-icon"></i>$ 23.400<span className="balance-decimal">00</span></p>
					</div>
				</div>
			</div>
			<div className="col-lg-3 col-md-5 col-sm-6">
				<Pie data={ data } height={ 225 } />
			</div>
		</div>
	</section>