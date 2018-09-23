import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'
import Axios from 'axios'

const URL = 'http://localhost:8080/api/v1/tasks'

export default class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      search: '', 
      description: '', 
      list: [] 
    }
  }

  componentDidMount = () => {
    this.refresh()
  }

  refresh = (status = '') => {
    const search = ''
    const description = ''
    const filter = status ? `/search/${status}` : ''
    Axios.get(`${URL}${filter}`).then(resp =>
      this.setState({ ...this.state, search, description, list: resp.data.message })
    )
  }

  handleChange = e => {
    if(e.target.id === 'search'){
      this.setState({ ...this.state, search: e.target.value })
    }else if(e.target.id === 'status'){
      this.refresh(e.target.value)
    }else{
      this.setState({ ...this.state, description: e.target.value })
    }
    
  }

  handleClear = () => {
    this.refresh()
  }
  handleAdd = () => {
    const name = this.state.search
    const { description } = this.state

    Axios.post(URL, {name, description}).then(resp => this.refresh())
  }
  handleRemove = todo => {
    Axios.delete(`${URL}/${todo.id}`).then(resp => this.refresh())
  }
  // handleSearch = () => {
  //   this.refresh(this.state.search, this.state.description)
  // }
  handleMarkAsDone = todo => {
    Axios.put(`${URL}/${todo.id}`, { ...todo, status: '1' }).then(resp =>
      this.refresh()
    )
  }
  handleMarkAsPending = todo => {
    Axios.put(`${URL}/${todo.id}`, { ...todo, status: '0' }).then(resp =>
      this.refresh()
    )
  }

  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm
          search={this.state.search}
          description={this.state.description}
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          handleClear={this.handleClear}
        />
        <TodoList
          list={this.state.list}
          handleRemove={this.handleRemove}
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPending={this.handleMarkAsPending}
        />
      </div>
    )
  }
}
