import React, { ChangeEvent } from 'react';
import './Label.css'

export interface InputFieldProps {
    label: string;
    value: string;
    onChange: (id: string, value: string) => void;
}
export class InputField extends React.Component<InputFieldProps> {
    private handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.props.onChange(e.target.id, e.target.value)
    }

    public render() {
        return <div>
            <label className="Label"> {this.props.label} </label>
            <input type='text' id={this.props.label} onChange={this.handleChange} value={this.props.value} />
        </div>
    }
}