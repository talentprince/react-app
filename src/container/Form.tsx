import { InputField } from "../components/InputField"
import { Button } from "../components/Button"
import { Select } from "../components/Select"
import { MultiSelect } from "../components/MultiSelect"
import React from "react";
import { Radio } from "../components/Radio";
import localforage from 'localforage';
import { Redirect } from "react-router";

interface FormPros {
}

interface FormState {
    [key: string]: string,
    isSumbit: string
}

export class Form extends React.Component<FormPros, FormState> {
    constructor(props: FormPros) {
        super(props);
        this.state = { isSumbit: "false" }
    }

    private onChange = (id: string, value: string) => {
        this.setState({ [id]: value })
    }

    private onSubmit = (e: React.FormEvent) => {
        this.handleSubmit(JSON.stringify(this.state))
        e.preventDefault()
    }

    private handleSubmit = async (body: string) => {
        localforage.length().then((lenght) =>
            localforage.setItem((lenght + 1).toString(), body).then(() =>
                this.setState({ isSumbit: "true" })));
    }

    private parseMultiSelected = () => {
        if (this.state["Role"]) {
            return this.state["Role"].split(",")
        } else {
            return []
        }
    }

    public render() {
        if (this.state.isSumbit === "true") {
            return <Redirect push to='/result' />
        }
        const inputFields = ["Name", "Password"].map((label, index) =>
            <InputField key={index} onChange={this.onChange} label={label} value={this.state[label]} />
        );
        const genderLable = "Gender"
        const certLabel = "Cert type"
        const roleLabel = "Role"
        const payTypeLabel = "Pay Type"
        const issuerLabel = "Issuer"
        const payType = this.state[payTypeLabel]
        const issuerOption = (payType === "credit card") ? ["Please select", "Master", "Visa", "Union Pay"] : payType === "e-pay" ? ["Please select", "Wechat", "Alipay"] : ["Please select payment type"]
        const submitState = Object.values(this.state).filter(value => value.indexOf("select") === -1).length === 8 ? "true" : "false"
        return <form onSubmit={this.onSubmit}>
            {inputFields}
            <Radio label={genderLable} selected={this.state[genderLable]} options={["Male", "Female"]} onChanged={this.onChange} />
            <Select label={certLabel} selected={this.state[certLabel]} options={["Please select", "SMS", "Token", "Token+SMS"]} onChanged={this.onChange} />
            <MultiSelect label={roleLabel} selected={this.parseMultiSelected()} options={["Read", "Write"]} onChanged={this.onChange} />
            <Select label={payTypeLabel} selected={this.state[payTypeLabel]} options={["Please select", "Credit Card", "E-Pay"]} onChanged={this.onChange} />
            <Select label={issuerLabel} selected={this.state[issuerLabel]} options={issuerOption} onChanged={this.onChange} />
            <Button text="Submit" state={submitState} />
        </form>
    }
}