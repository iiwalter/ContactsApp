import React from 'react';

class InputFilter extends React.Component {

    render() {
        return (
            <div className="filters__search">
                <input type="text" className="filters__search__input" placeholder="Pesquisar" onChange={this.props.handleChange} />

                <button className="filters__search__icon">
                    <i className="fa fa-search" />
                </button>
            </div>
        )
    }
}


export default InputFilter;