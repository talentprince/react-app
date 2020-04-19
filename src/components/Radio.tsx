import React from 'react';
import './Label.css'

interface RadioPors {
    label: string;
    options: Array<string>;
    selected: string;
    onChanged: (id: string, selected: string) => void
}

export class Radio extends React.Component<RadioPors> {

    onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.onChanged(this.props.label, event.target.value)
    }

    public render() {
        const options = this.props.options.map((option, index) =>
            <>
                <input type="radio" id={index.toString()} name={this.props.label} value={option} onChange={this.onChange} />
                <label htmlFor={index.toString()}>{option}</label>
            </>
        );
        return <div>
            <label className="Label">{this.props.label}</label>
            {options}
        </div>
    }
}