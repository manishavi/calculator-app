import React, { Component } from "react";
import Button from "./button";

class ButtonBoard extends Component {
  render() {
    return <div>
        <Button />
        <div>
          <Button name='1'/>
          <Button name='2'/>
          <Button name='3'/>
          <Button name='4'/>
        </div>
        <div>
          <Button name='5'/>
          <Button name='6'/>
          <Button name='7'/>
          <Button name='8'/>
        </div>
        <div>
          <Button name='9'/>
          <Button name='0'/>
          <Button name='+'/>
          <Button name='.'/>
        </div>
        <div>
          <Button name='='/>
          <Button name='AC'/>
          <Button name='+/-'/>
          <Button name='-'/>
        </div>
        <div>
          <Button name='*'/>
          <Button name='%'/>
          <Button name='/'/>
          <Button name='C'/>
        </div>
      </div>;
  }
}

export default ButtonBoard;
