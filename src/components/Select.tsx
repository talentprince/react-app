import React from 'react';
import './Label.css'

interface SelectPors {
    label: string;
    options: Array<string>;
    selected: string;
    onChanged: (id: string, selected: string) => void
}

export class Select extends React.Component<SelectPors> {

    onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.props.onChanged(this.props.label, event.target.value)
    }

    public render() {
        const options = this.props.options.map((option, index) =>
            <option key={index} value={option.toLowerCase()}>{option}</option>
        );
        return <div>
            <label className="Label">{this.props.label}</label>
            <select value={this.props.selected} onChange={this.onChange}>
                {options}
            </select>
        </div>
    }
}