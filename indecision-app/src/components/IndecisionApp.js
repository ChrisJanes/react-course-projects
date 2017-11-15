import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';

export default class IndecisionApp extends React.Component {
  state =  {
    options: []
  };

  handleDeleteOptions = () => {
    this.setState(() => ({options: []}));
  };

  handleDeleteOptionSingular = (optionToRemove) => {
    this.setState((prevState) => ({
      options:prevState.options.filter((option) => option !== optionToRemove)
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  };

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add option';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option aleady exists';
    }

    this.setState((prevState) => ({options: prevState.options.concat(option)}));
  };

  // life cycle methods
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({options}));
      }
    } catch (e) {

    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.options.length !== prevState.options.length) {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOptionSingular}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}