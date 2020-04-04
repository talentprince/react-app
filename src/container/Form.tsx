import { InputField } from "../components/InputField"
import { Button } from "../components/Button"
import { Select } from "../components/Select"
import { MultiSelect } from "../components/MultiSelect"
import React from "react";

interface FormPros {
    onSubmit: (body: string) => void;
}

interface FormState {
    [key: string]: string
}

export class Form extends React.Component<FormPros, FormState> {
    constructor(props: FormPros) {
        super(props);
        this.state = {}
    }

    private onChange = (id: string, value: string) => {
        this.setState({[id] :value})
    }

    private onSubmit = (e: React.FormEvent) => {
        this.props.onSubmit(JSON.stringify(this.state))
        e.preventDefault()
    }

    private parseMultiSelected = () => {
        if (this.state["Role"]) {
            return this.state["Role"].split(",")
        } else {
            return []
        }
    }

    public render() {
        const inputFields = ["Name", "Password"].map((label) =>
            <InputField onChange={this.onChange} label={label} value={this.state[label]}/>
        );
        const selectLabel = "Cert type"
        const multiLabel = "Role"
        return <form onSubmit={this.onSubmit}>
            {inputFields}
            <Select label={selectLabel} selected={this.state[selectLabel]} options={["SMS", "Token", "Token+SMS"]} onChanged={this.onChange}/>
            <MultiSelect label={multiLabel} selected={this.parseMultiSelected()} options={["Read", "Write"]} onChanged={this.onChange}/>
            <Button text="Submit"/>
        </form>
    }
}