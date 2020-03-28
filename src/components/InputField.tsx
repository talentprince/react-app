import React, { ChangeEvent } from 'react';

export interface InputFieldProps {
    label: string;
    onChange: (id: string, value: string) => void;
}
export class InputField extends React.Component<InputFieldProps> {
    constructor(props: InputFieldProps) {
        super(props);
    }

    handleChange(e: ChangeEvent<HTMLInputElement>) {
        this.props.onChange(e.target.id, e.target.value)
    }

    public render() {
        return <div>
            <label> {this.props.label} </label>
            <input type='text' id={this.props.label} onChange={this.handleChange.bind(this)}/>
        </div>
    }
}