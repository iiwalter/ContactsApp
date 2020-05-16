import React from 'react';

import './App.scss';
import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      textFilter: '',
      filterData: [],
      contatoFind: true
    };
  }

  async componentDidMount() {
    const url = "https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts"
    const data = await fetch(url).then(response => response.json()).then(contatos => this.setState({ data: contatos, loading: false, filterData: contatos }))
    return data
  }

  handleInputChange = e => {
    e.preventDefault()
    console.log(e.target.value)
    this.setState({
      textFilter: e.target.value
    }, () => this.handleFilter(this.state.textFilter))
  }

  handleFilter(textFilter) {
    const contatos = this.state.data
    const search = textFilter.split(',').map(contact => contact.trim())
    const contato = []
    search.map(caractere => {
      contatos.map((item) => {
        if (item.name.toLowerCase().search(caractere.toLowerCase()) === 0) {
          return contato.push(item)
        }
        return contato
      })
      return contatos
    })
    contato.length === 0 ?
      this.setState({
        contatoFind: false
      }) :
      this.setState({
        filterData: contato,
        contatoFind: true
      })
  }

  handleClick(bName) {
    console.log(bName)
    const contatos = this.state.filterData
    contatos.sort((a, b) => {
      return (a[bName] > b[bName]) ? 1 : ((b[bName] > a[bName]) ? -1 : 0)
    })
    this.setState({
      filterData: contatos
    })
    console.log(this.state.filterData)
  }

  render() {
    return (
      <React.Fragment>
        <div className="app" data-testid="app">
          <Topbar />
          <Filters
            ordenarNome={() => this.handleClick("name")}
            ordenarPais={() => this.handleClick("country")}
            ordenarEmpresa={() => this.handleClick("company")}
            ordenarDepartamento={() => this.handleClick("department")}
            ordenarAdmissao={() => this.handleClick("admissionDate")}
            handleChange={this.handleInputChange}
          />
          <Contacts data={this.state.filterData} loading={this.state.loading} contatoFind={this.state.contatoFind} />
        </div>
      </React.Fragment>

    )
  }
}

export default App;
