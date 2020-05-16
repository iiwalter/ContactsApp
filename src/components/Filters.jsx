import React from 'react';

import InputFilter from './InputFilter'

class Filters extends React.Component {

	render() {
		return (
			<div className="container" data-testid="filters">
				<section className="filters">
					<InputFilter handleChange={this.props.handleChange} />

					<button className="filters__item is-selected" onClick={() => this.props.ordenarNome()}>
						Nome <i className="fas fa-sort-down" />
					</button>

					<button className="filters__item" onClick={() => this.props.ordenarPais()}>
						País <i className="fas fa-sort-down" />
					</button>

					<button className="filters__item" onClick={() => this.props.ordenarEmpresa()}>
						Empresa <i className="fas fa-sort-down" />
					</button>

					<button className="filters__item" onClick={() => this.props.ordenarDepartamento()}>
						Departamento <i className="fas fa-sort-down" />
					</button>

					<button className="filters__item" onClick={() => this.props.ordenarAdmissao()}>
						Data de admissão <i className="fas fa-sort-down"  />
					</button>
				</section>
			</div>
		);
	}
}

export default Filters;
