import React from 'react'

export default class Form extends React.Component {
  render() {
    const { value, onSubmit, onChange, toggleShouldShow, shouldShow, disabled } = this.props;
    return (
      <div>
        <form onSubmit={onSubmit}>
          <input value={value} onChange={onChange} type="text" placeholder="enter to-do" />
        <input disabled={disabled} type='submit' />
        </form>
        <button onClick={toggleShouldShow}>{shouldShow ? 'Hide' : 'Show'} Completed To Do</button>
      </div>
    )
  }
}