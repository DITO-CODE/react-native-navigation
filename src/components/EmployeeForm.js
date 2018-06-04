import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { View, Text, Picker } from 'react-native';
import {CardSection, Input} from './commons';

class EmployeeForm extends Component{



    render(){
        return (
            <View>  
                <CardSection >
                    <Input
                        label="Name"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText = {value => this.props.employeeUpdate({prop: 'name',value})}
                    /> 
                </CardSection>
                    
                <CardSection >
                    <Input
                        label="Phone"
                        placeholder="555-555-555"
                        value={this.props.phone}
                        onChangeText = {value => this.props.employeeUpdate({prop: 'phone',value})}
                    /> 
                </CardSection>

                <CardSection style={{flexDirection: 'column'}} >
                    <Text style={styles.pickerLabelStyle}>Shift</Text>
                    <Picker
                        style={{flex: 1}}
                        selectedValue={this.props.shift}
                        onValueChange={ value => this.props.employeeUpdate({prop:'shift', value})}
                    >
                        <Picker.Item label="Lunes" value="Lunes" />
                        <Picker.Item label="Martes" value="Martes" />
                        <Picker.Item label="Miercoles" value="Miercoles" />
                        <Picker.Item label="Jueves" value="Jueves" />
                        <Picker.Item label="Viernes" value="Viernes" />
                        <Picker.Item label="Sabado" value="Sabado" />
                        <Picker.Item label="Domingo" value="Domingo" />
                    </Picker>

                </CardSection>

            </View>  
        );
    }
}

const styles = {
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};


const mapStateToProps = (state) => {
    const {name,phone,shift} = state.employeeForm;

    return {name,phone,shift}
};


export default connect(mapStateToProps,{employeeUpdate})(EmployeeForm);
