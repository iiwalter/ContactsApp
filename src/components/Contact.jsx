import React, { Fragment } from 'react';

class Contact extends React.Component {
  render() {
    const contato = this.props.data;
    const date = new Date(contato.admissionDate).toLocaleDateString('pt-BR')
    return (
      <Fragment>
        <article className="contact" data-testid="contact">
          <span className="contact__avatar" ><img src={contato.avatar} alt={contato.name} /></span>
          <span className="contact__data" data-testid="contact-name" >{contato.name}</span>
          <span className="contact__data" data-testid="contact-phone">{contato.phone}</span>
          <span className="contact__data" data-testid="contact-country">{contato.country}</span>
          <span className="contact__data" data-testid="contact-date">{date}</span>
          <span className="contact__data" data-testid="contact-company" >{contato.company}</span>
          <span className="contact__data" data-testid="contact-department">{contato.department}</span>
        </article>
      </Fragment>
    );
  }
}

export default Contact;
