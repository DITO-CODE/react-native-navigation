import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Picker, Text } from 'react-native';
import { Card, CardSection, Input, Button } from './commons';

class EmployeeCreate extends Component {

    onButtonPress(){
        const { name, phone, shift} = this.props;

        this.props.employeeCreate({name,phone,shift: shift || 'Monday'});
    }
    render(){
        return (
            <Card>
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

                <CardSection >
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = (state) => {
    const { name,phone, shift} = state.employeeForm;

    return { name,phone, shift }
};

export default connect(mapStateToProps,{employeeUpdate,employeeCreate})(EmployeeCreate);
