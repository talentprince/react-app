import React, { ChangeEvent } from 'react';
import './Label.css'

interface MultiSelectPors {
    label: string;
    options: Array<string>;
    selected: Array<string>;
    onChanged: (id: string, selected: string) => void
}

interface MultiSelectState {
    dropDownVisibale: boolean
}

export class MultiSelect extends React.Component<MultiSelectPors, MultiSelectState> {
    constructor(props: MultiSelectPors) {
        super(props);
        this.state = {
            dropDownVisibale: false
        }
    }

    public render() {
        let selectLable = "Select an option"
        if (this.props.selected.length > 0) {
            selectLable = this.props.selected.join(",")
        }
        return <div>
            <label className="Label">{this.props.label}</label>
            <select onClick={(e) => {
                this.setState({ dropDownVisibale: !this.state.dropDownVisibale })
            }} onMouseDown={(e) => e.preventDefault()}>
                <option>{selectLable}</option>
            </select>
            <MultiOptions label={this.props.label} options={this.props.options} selected={this.props.selected} onChanged={this.props.onChanged} dropDownVisibale={this.state.dropDownVisibale} />
        </div>
    }
}

interface MultiOptionsPors {
    label: string;
    options: Array<string>;
    selected: Array<string>;
    onChanged: (id: string, selected: string) => void;
    dropDownVisibale: boolean;
}

class MultiOptions extends React.Component<MultiOptionsPors>  {

    private handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            this.props.selected.push(e.target.value)
        } else {
            const index = this.props.selected.indexOf(e.target.value, 0);
            if (index > -1) {
                this.props.selected.splice(index, 1);
            }
        }
        const selectedString = this.props.selected.join(',')
        this.props.onChanged(this.props.label, selectedString)
    }

    public render() {
        if (this.props.dropDownVisibale) {
            const options = this.props.options.map((option) => {
                if (this.props.selected.indexOf(option) > -1)
                    return <div>
                        <label>
                            <input type="checkbox" id={option.toLowerCase()} value={option} onChange={this.handleChange} checked />{option}
                        </label>
                    </div>
                else
                    return <div>
                        <label>
                            <input type="checkbox" id={option.toLowerCase()} value={option} onChange={this.handleChange} />{option}
                        </label>
                    </div>
            }
            )
            return <div>
                {options}
            </div>
        } else {
            return <></>
        }
    }
}