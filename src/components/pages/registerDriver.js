import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as BackendHelper from '../../helpers/backendHelper'
import { Form, Input, Button, Icon } from 'antd'


class RegisterDriver extends Component {
    constructor(props: ItemProps) {
        super(props)
        this.state = {
            confirmDirty: false,
        }
    }
    componentWillMount() {
    }
    componentDidMount() {
    }
    componentWillUpdate() {
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
        const form = this.props.form;
        const data = {
            'phone': form.getFieldValue('phone'),
            'driverLiscNo': form.getFieldValue('driverLiscNo'),
            'idcardNo': form.getFieldValue('idcardNo'),
            'weightLimit': form.getFieldValue('weightLimit'),
            'specialQualification': form.getFieldValue('specialQualification'),
            'truckHeight': form.getFieldValue('truckHeight')
        }
        BackendHelper.signinDriver(
            data,
            (data) => {
                console.log(data)
            },
            (err) => {
                console.log(err)
            }
        )
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
                            <Input />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="ID card">
                        {getFieldDecorator('idcardNo', {
                            rules: [{ required: true, message: 'Please input your ID' }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="Driver Licence">
                        {getFieldDecorator('driverLiscNo', {
                            rules: [{ required: true, message: 'Please input licence no.' }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="Available weight">
                        {getFieldDecorator('weightLimit', {
                            rules: [{ required: true, message: 'Please input weight you can take' }],
                        })(
                            <Input
                                type="number" />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="Truck height">
                        {getFieldDecorator('truckHeight', {
                            rules: [{ required: true, message: 'Please input height of you truck' }],
                        })(
                            <Input
                                type="number" />
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
                                type="password"
                                onBlur={this.handleConfirmBlur} />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="Special qualification">
                        {getFieldDecorator('specialQualification', {
                            rules: [{}],
                        })(
                            <TextArea
                                placeholder=""
                                rows={4} />
                        )}
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
