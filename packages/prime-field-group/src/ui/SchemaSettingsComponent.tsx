import { PrimeFieldProps } from '@primecms/field';
import { Form, Switch } from 'antd';
import React from 'react';

type Props = PrimeFieldProps & {
  options: {
    repeated?: boolean;
  };
};

export class SchemaSettingsComponent extends React.PureComponent<Props> {
  public render() {
    const { form, options = {} } = this.props;

    return (
      <>
        <Form.Item label="Options" style={{ marginBottom: -8 }} />
        <Form.Item>
          {form.getFieldDecorator('options.repeated', {
            valuePropName: 'checked',
            initialValue: options.repeated,
          })(<Switch />)}
          <label htmlFor="options.repeated" style={{ marginLeft: 8 }}>
            Repeatable
          </label>
        </Form.Item>
      </>
    );
  }
}
