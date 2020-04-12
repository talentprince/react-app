import { InputField } from "../components/InputField"
import { Button } from "../components/Button"
import { Select } from "../components/Select"
import { MultiSelect } from "../components/MultiSelect"
import React from "react";
import { Radio } from "../components/Radio";

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
        const genderLable = "Gender"
        const certLabel = "Cert type"
        const roleLabel = "Role"
        const payTypeLabel = "Pay Type"
        const issuerLabel = "Issuer"
        const payType = this.state[payTypeLabel]
        const issuerOption = (payType === "credit card" || payType === undefined) ? ["Master", "Visa", "Union Pay"] : ["Wechat", "Alipay"]
        return <form onSubmit={this.onSubmit}>
            {inputFields}
            <Radio label={genderLable} selected={this.state[genderLable]} options={["Male", "Female"]} onChanged={this.onChange}/>
            <Select label={certLabel} selected={this.state[certLabel]} options={["SMS", "Token", "Token+SMS"]} onChanged={this.onChange}/>
            <MultiSelect label={roleLabel} selected={this.parseMultiSelected()} options={["Read", "Write"]} onChanged={this.onChange}/>
            <Select label={payTypeLabel} selected={this.state[payTypeLabel]} options={["Credit Card", "E-Pay"]} onChanged={this.onChange}/>
            <Select label={issuerLabel} selected={this.state[issuerLabel]} options={issuerOption} onChanged={this.onChange}/>
            <Button text="Submit"/>
        </form>
    }
}