import React from 'react';
import ReactDOM from 'react-dom';
import { Appointment, AppointmentsDayView } from '../src/Appointment';

let container;
let customer;
const render = (component) => ReactDOM.render(component, container);

describe('Appointment', () => {

	beforeEach(() => {
		container = document.createElement('div');
	});

	it('renders the customer first name', () => {
		customer = { firstName: 'Bernardo' };
		render(<Appointment customer={customer} />);
		expect(container.textContent).toMatch('Bernardo');
	});

	it('renders another customer first name', () => {
		customer = { firstName: 'Gabriel' };
		render(<Appointment customer={customer} />);
		expect(container.textContent).toMatch('Gabriel');
	});
});

describe('AppointmentsDayView', () => {

  beforeEach(() => {
    container = document.createElement('div');
  })

  it('renders a div with the right id', () => {
    render(<AppointmentsDayView appointments={[]} />);
    expect(container.querySelector('div#appointmentsDayView')).not.toBeNull();
  })
});