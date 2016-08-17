export const initialStateFile = {
    userLoged: false,
    accounts: {
		actualBalance: { currency: '$', amount: 40500 },
		yesterdayBalance: { currency: '$', amount: 44500 },
		resumeMonth: { credits: 62500, debits: 12000 },
		lastMovements: [
			{
				date: '30/07/2016',
				hour: '22:00',
				type: 'D',
				description: 'Retiro desde cajero',
				value: { currency: '$', amount: 4000}
			},
			{
				date: '23/07/2016',
				hour: '22:00',
				type: 'D',
				description: 'Retiro desde cajero',
				value: { currency: '$', amount: 2000}
			},
			{
				date: '22/07/2016',
				hour: '22:00',
				type: 'D',
				description: 'Retiro desde cajero',
				value: { currency: '$', amount: 500}
			},
			{
				date: '21/07/2016',
				hour: '10:00',
				type: 'C',
				description: 'Transferencia de Lu',
				value: { currency: '$', amount: 200}
			},  
			{
				date: '15/07/2016',
				hour: '13:43',
				type: 'D',
				description: 'Retiro desde cajero',
				value: { currency: '$', amount: 300}
			}     
		]
    },
    savingAccounts: {
		actualBalance: 30500,
		yesterdayBalance: 34500,
		lastMovements: [
			{
				date: '30/07/2016',
				hour: '22:00',
				type: 'D',
				description: 'Retiro desde cajero',
				value: { currency: '$', amount: 4000}
			},
			{
				date: '23/07/2016',
				hour: '22:00',
				type: 'D',
				description: 'Retiro desde cajero',
				value: { currency: '$', amount: 2000}
			},
			{
				date: '22/07/2016',
				hour: '22:00',
				type: 'D',
				description: 'Retiro desde cajero',
				value: { currency: '$', amount: 500}
			}, 
			{
				date: '01/07/2016',
				hour: '13:43',
				type: 'C',
				description: 'Salario',
				value: { currency: '$', amount: 30000}
			},
			{
				date: '22/06/2016',
				hour: '22:00',
				type: 'D',
				description: 'Retiro desde cajero',
				value: { currency: '$', amount: 700}
			}    
		]
    },
	currentAccount: {
		actualBalance: 10000,
		yesterdayBalance: 10000,
		lastMovements: [
			{
				date: '21/07/2016',
				hour: '10:00',
				type: 'C',
				description: 'Transferencia de Lu',
				value: { currency: '$', amount: 200}
			},
			{
				date: '21/07/2016',
				hour: '10:00',
				type: 'C',
				description: 'Transferencia interna',
				value: { currency: '$', amount: 3500}
			},
			{
				date: '01/07/2016',
				hour: '12:34',
				type: 'D',
				description: 'Retiro desde cajero',
				value: { currency: '$', amount: 600}
			}, 
			{
				date: '11/06/2016',
				hour: '07:43',
				type: 'C',
				description: 'Transferencia',
				value: { currency: '$', amount: 600}
			}, 
			{
				date: '10/06/2016',
				hour: '10:55',
				type: 'C',
				description: 'Transferencia',
				value: { currency: '$', amount: 600}
			}      
		]
	}
  }