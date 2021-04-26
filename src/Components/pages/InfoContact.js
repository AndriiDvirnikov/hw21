import React, { Component } from 'react';
import Contact from './Contact';

export default class InfoContacts extends Component {

state = {
	contacts:  [
			{
			firstName: "Барней",
			lastName: "Стинсовський",
			phone: "+380956319521",
			gender: "male"
	},{
			firstName: "Робін",
			lastName: "Щербатська",
			phone: "+380931460123",
			gender: "female"
	}, {
			firstName: "Анонімний",
			lastName: "Анонімус",
			phone: "+380666666666",
		
	}, {
			firstName: "Лілія",
			lastName: "Олдровна",
			phone: "+380504691254",
			gender: "female"
	}, {
			firstName: "Маршен",
			lastName: "Еріксонян",
			phone: "+380739432123",
			gender: "male"
	}, {
			firstName: "Теодор",
			lastName: "Мотсбес",
			phone: "+380956319521",
			gender: "male"
	}
	],
	
	search: "",
	male: 'male',
	female: 'female',
	others: true
}

handleSearchChange = e => {
	const inputValue = e.target.value;
	this.setState({search: inputValue});	
}

showContacts = () => {
	const contactsArr = this.state.contacts;

		return contactsArr.map((contact, i) => <Contact props = {contact} key={i}/>);

}


	render() {
		return(
			<div className = 'holder'>	
				<div className='info_hold'>
					{this.showContacts()}
				</div>
			</div>
		)
	}
}