import React from 'react'
import { Line } from 'react-chartjs-2'

const dataLine = {
    labels: ["17 JUL", "18 JUL", "19 JUL", "20 JUL", "21 JUL", "22 JUL", "23 JUL", "24 JUL", "25 JUL", "26 JUL", "27 JUL", "28 JUL", "29 JUL", "30 JUL"],
    datasets: [
        {
            label: "saldo",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#0079a1",
            borderColor: "#0079a1",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "#0079a1",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 5,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#0079a1",
            pointHoverBorderColor: "#0079a1",
            pointHoverBorderWidth: 5,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [57800, 55300, 50100, 50100, 50100, 50100, 50100, 47000, 47000, 45600, 45600, 44500, 44500, 40500],
            spanGaps: false,
        }
    ]
}

export const ResumeMonth = () => 
	<section id="forDay" className="row month hidden-xs hidden-sm">
		<div className="container">
			<div>
				<h3>DETALLE POR DÍA</h3>
				<Line data={ dataLine } height={ 60 }/>
			</div>
		</div>
	</section>