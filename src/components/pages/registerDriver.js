import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as BackendHelper from '../../helpers/backendHelper'
import { Form, Input, Button, Icon } from 'antd'


class RegisterDriver extends Component {
    constructor(props: ItemProps) {
        super(props)
        this.state = {
            confirmDirty: false,
            phone: '',
            driverLiscNo: '',
            idcardNo: '',
            weightLimit: '',
            specialQualification: '',
            truckHeight: '',
            password: '',
            repeatPassword: '',
        }
    }
    componentWillMount() {
    }
    componentDidMount() {
    }
    componentWillUpdate() {
    }
    handleIDChange(event) {
        this.setState({ idcardNo: event.target.value });
    }
    handleDriverLicenceChange(event) {
        this.setState({ driverLiscNo: event.target.value });
    }
    handlePhoneChange(event) {
        this.setState({ phone: event.target.value });
    }
    handleWeightChange(event) {
        this.setState({ weightLimit: event.target.value });
    }
    handleHeightChange(event) {
        this.setState({ truckHeight: event.target.value });
    }
    handleSpecialQualificationChange(event) {
        this.setState({ specialQualification: event.target.value });
    }
    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }
    handleRepeatPasswordChange(event) {
        this.setState({ repeatPassword: event.target.value });
    }
    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }
    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }

    register(e) {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
        /*        
        BackendHelper.signinDriver(
            {
                'phone': this.state.phone,
                'driverLiscNo': this.state.driverLiscNo,
                'idcardNo': this.state.idcardNo,
                'weightLimit': this.state.weightLimit,
                'specialQualification': this.state.specialQualification,
                'truckHeight': this.state.truckHeight
            },
            (data) => {
                console.log(data)
            },
            (err) => {
                console.log(err)
            }
        )
        */
    }
    render() {
        const FormItem = Form.Item
        const { TextArea } = Input
        const formItemLayout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        };
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="container">
                <h1>
                    Register truck
                </h1>
                <Form onSubmit={this.register.bind(this)} >
                    <FormItem {...formItemLayout} label="Phone">
                        {getFieldDecorator('phone', {
                            rules: [{ required: true, message: 'Please input your phone number!' }],
                        })(
                            <Input
                                onChange={this.handlePhoneChange.bind(this)} />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="ID card">
                        {getFieldDecorator('idcardNo', {
                            rules: [{ required: true, message: 'Please input your ID' }],
                        })(
                            <Input
                                onChange={this.handlePhoneChange.bind(this)} />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="Driver Licence">
                        {getFieldDecorator('driverLiscNo', {
                            rules: [{ required: true, message: 'Please input licence no.' }],
                        })(
                            <Input
                                onChange={this.handleDriverLicenceChange.bind(this)} />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="Available weight">
                        {getFieldDecorator('weightLimit', {
                            rules: [{ required: true, message: 'Please input weight you can take' }],
                        })(
                            <Input
                                type="number"
                                onChange={this.handleWeightChange.bind(this)} />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="Truck height">
                        {getFieldDecorator('truckHeight', {
                            rules: [{ required: true, message: 'Please input height of you truck' }],
                        })(
                            <Input
                                type="number"
                                onChange={this.handleHeightChange.bind(this)} />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="Password">
                        {getFieldDecorator('password', {
                            rules: [{
                                required: true, message: 'Please input your password!',
                            }, {
                                validator: this.validateToNextPassword,
                            }],
                        })(
                            <Input
                                onChange={this.handlePasswordChange.bind(this)}
                                type="password" />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="Repeat password">
                        {getFieldDecorator('confirm', {
                            rules: [{
                                required: true, message: 'Please confirm your password!',
                            }, {
                                validator: this.compareToFirstPassword,
                            }],
                        })(
                            <Input
                                onChange={this.handleRepeatPasswordChange.bind(this)}
                                type="password"
                                onBlur={this.handleConfirmBlur} />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="Special qualification">
                        <TextArea
                            onChange={this.handleSpecialQualificationChange.bind(this)}
                            placeholder=""
                            rows={4} />
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

const WrappedRegisterDriver = Form.create()(RegisterDriver)

function mapStateToProps(state) {
    return {
    }
}

export default connect(mapStateToProps)(WrappedRegisterDriver);
