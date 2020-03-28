import { InputField, InputFieldProps } from "./InputField"
import { Button } from "./Button"
import React from "react";

interface FormPros {
    formLabels: Array<string>;
    submitLabel: string;
    onSubmit: (body: string) => void;
}

interface FormState {
    [key: string]: string
}

export class Form extends React.Component<FormPros, FormState> {
    private onChange(id: string, value: string) {
        this.setState({[id] :value})
    }

    private onSubmit(e: React.FormEvent) {
        this.props.onSubmit(JSON.stringify(this.state))
        e.preventDefault()
    }

    public render() {
        const inputFields = this.props.formLabels.map((label, index) =>
            <InputField onChange={this.onChange.bind(this)} label={label} />
        );
        return <form onSubmit={this.onSubmit.bind(this)}>
            {inputFields}
            <Button text={this.props.submitLabel}/>
        </form>
    }
}