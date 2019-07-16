import React from 'react';
import { DatePicker, Switch, Select, Checkbox,Button } from 'antd';
import './App.css';
import { enabled } from 'ansi-colors';

const { RangePicker } = DatePicker;
const { Option } = Select;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switchValue:false,
      dateValue:null,
      selectedValue:[],
      checkboxValue:null,
      defaultValue: [],
      lengthDefault:0,
      enableSubmit:true
     };
  }
onSelectedDate = (date, dateString)=> {
  console.log("Date String",dateString);
  this.setState({
    dateValue: dateString,
    enableSubmit: this.state.lengthDefault > 0 && dateString[0]!=""  ? false : true
  })
}
onChangeSwitch =(checked)=> {
  console.log("Switch",checked);
  if(checked == false){
    this.setState({
      switchValue: false,
      defaultValue: [],
      selectedValue: [],
      lengthDefault: 0,
      enableSubmit: false,
    }) 
  }else{
    this.setState({
      switchValue: true,
      defaultValue: ['Test0001', 'Test0002', 'Test0003', 'Test0004', 'Test0005'],
      lengthDefault: 5,
      enableSubmit: false
    }) 
  }
}
onSelected=(value)=> {
  this.setState({
    selectedValue: value,
    lengthDefault: value.length,
    enableSubmit: value.length > 0 ? false : true,
    switchValue: value.length < 5 ? false : true,  
  })
}
  render() {
    let valueSelected = [];
    if (this.state.switchValue == true && this.state.lengthDefault == 5){
      valueSelected = this.state.defaultValue;
      console.log("defaultValue", valueSelected);
    }else{
      valueSelected = this.state.selectedValue;
      console.log("selectedValue", valueSelected);
    }
   
    return (
      <div className="app">
        <RangePicker onChange={this.onSelectedDate} style={{ marginRight: 20,marginBottom:20 }} />
        <Switch checked={this.state.switchValue} onChange={this.onChangeSwitch} style={{ marginRight: 20, marginBottom: 20 }} />
        <Select
          style={{ width: 320, marginRight: 15, marginBottom: 20 }}
          mode="multiple"
          value={valueSelected}
          placeholder="select one"
          onChange={this.onSelected}
          optionLabelProp="label">
          <Option label="Test0001" value="Test0001">Test0001</Option>
          <Option label="Test0002" value="Test0002">Test0002</Option>
          <Option label="Test0003" value="Test0003">Test0003</Option>
          <Option label="Test0004" value="Test0004">Test0004</Option>
          <Option label="Test0005" value="Test0005">Test0005</Option>
        </Select>
        <Button type="primary" disabled={this.state.enableSubmit} >Submit</Button>
      </div>
    );
  }
}

export default App;
