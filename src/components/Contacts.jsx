import React from "react";
import Contact from "./Contact";

class Contacts extends React.Component {
	render() {
		return (
			<div className="container" data-testid="contacts">
				<section className="contacts">
					<article className="contact">
						<span className="contact__avatar" />
						<span className="contact__data">Nome</span>
						<span className="contact__data">Telefone</span>
						<span className="contact__data">País</span>
						<span className="contact__data">Admissão</span>
						<span className="contact__data">Empresa</span>
						<span className="contact__data">Departamento</span>
					</article>
					{this.props.loading ?
						<div className="contact"> Carregando...</div>
						: this.props.contatoFind === false ? <div className="contact"> Contato não encontrado</div> :
							this.props.data.map((contato) => { return (<Contact key={contato.id} data={contato} />) })}
				</section>
			</div>
		);
	}
}

export default Contacts;
