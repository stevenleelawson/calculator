import React, { Component } from 'react';
import Button from '../Button';
import './styles.css';

class ButtonContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="button-container">
        <div>
          <div className="button-row">
            <Button handleClick={this.props.handleClick} label="7" value="7"/>
            <Button handleClick={this.props.handleClick} label="8" value="8"/>
            <Button handleClick={this.props.handleClick} label="9" value="9"/>
          </div>
          <div className="button-row">
            <Button handleClick={this.props.handleClick} label="4" value="4"/>
            <Button handleClick={this.props.handleClick} label="5" value="5"/>
            <Button handleClick={this.props.handleClick} label="6" value="6"/>
          </div>
          <div className="button-row">
            <Button handleClick={this.props.handleClick} label="1" value="1"/>
            <Button handleClick={this.props.handleClick} label="2" value="2"/>
            <Button handleClick={this.props.handleClick} label="3" value="3"/>
          </div>
          <div className="button-row">
            <Button handleClick={this.props.handleClick} label="0" value="0"/>
            <Button
              handleClick={this.props.handleDelClick}
              label="del"
            />
            <Button
              handleClick={this.props.handleEvaluateClick}
              label="="
            />
          </div>
          <div className="button-row">
            <Button
              handleClick={this.props.handleClearClick}
              label="CLEAR"
            />
          </div>
        </div>
        <div className="button-column">
          <Button handleClick={this.props.handleClick} label="+" value="+"/>
          <Button handleClick={this.props.handleClick} label="x" value="*"/>
          <Button handleClick={this.props.handleClick} label="/" value="/"/>
          <Button handleClick={this.props.handleSqClick} label="sq" />
          <Button handleClick={this.props.handlePercentClick} label="%" />
        </div>
      </div>
    )
  }
}

export default ButtonContainer;
