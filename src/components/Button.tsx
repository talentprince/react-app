import React from 'react';

interface ButtonProps {
    text: string;
    state: string
}

export class Button extends React.Component<ButtonProps> {
    public render() {
        if (this.props.state === 'true') {
        return <>
            <input type='submit' value={this.props.text}/>
        </>
        } else {
            return <>
            <input type='submit' value={this.props.text} disabled/>
        </>
        }
    }
}