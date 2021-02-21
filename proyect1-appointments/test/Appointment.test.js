import { render } from 'react-dom';
import React from 'react';
import Appointment from '../src/Appointment'

describe('Appointment', () => {
	it('renders the customer first name', () => {
		const customer = { firstName: 'Bernardo' };
		const component = <Appointment customer={customer} />;
		const container = document.createElement('div');
		document.body.appendChild(container);

		render(component, container);

		expect(document.body.textContent).toMatch('Bernardo');
	});
});
