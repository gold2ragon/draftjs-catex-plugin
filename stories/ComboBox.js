import React, { Component } from 'react';

export default class ComboBox extends Component {
  onChange = (e) => {
    var orientation = e.target.value;
    if(orientation == "horizontal") {
      $('div[data-contents="true"]').css({
        'display' : 'flex',
        'flex-wrap' : 'wrap'
      })
    }
    else {
      $('div[data-contents="true"]').css({
        'display' : 'block',
      })
    }
  };

  render() {
    return (
      <select id="orientation" onChange={this.onChange}>
        <option value="vertical">Vertical</option>
        <option value="horizontal">Horizontal</option>        
      </select>
    );
  }
}
