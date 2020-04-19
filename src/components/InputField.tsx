import React, { ChangeEvent } from 'react';
import './Label.css'

export interface InputFieldProps {
    label: string;
    value: string;
    onChange: (id: string, value: string) => void;
}

interface InputFieldState {
    error: string;
}

export class InputField extends React.Component<InputFieldProps, InputFieldState> {

    constructor(props: InputFieldProps) {
        super(props);
        this.state = {
            error: ""
        }
    }

    private handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (this.validate(e.target.value)) {
            this.setState({ error: "" })
        } else {
            this.setState({ error: "Only letter allowed" })
        }
        this.props.onChange(e.target.id, e.target.value)
    }
    private validate = (value: string) => {
        if (value.match(/^[A-Za-z]+$/)) {
            return true
        } else {
            return false
        }
    }

    public render() {
        let error = this.state.error === "" ? <></> : <label className="Error"> {this.state.error} </label>
        return <>
            <div>
                <label className="Label"> {this.props.label} </label>
                <input type='text' id={this.props.label} onChange={this.handleChange} value={this.props.value} />
            </div>
            {error}
        </>
    }
}