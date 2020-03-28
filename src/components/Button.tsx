import React from 'react';

export interface ButtonProps {
    text: string;
}

export class Button extends React.Component<ButtonProps> {
    constructor(props: ButtonProps) {
        super(props);
    }

    public render() {
        return <div>
            <input type='submit' value={this.props.text}/>
        </div>
    }
}