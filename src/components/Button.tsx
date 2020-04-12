import React from 'react';

interface ButtonProps {
    text: string;
}

export class Button extends React.Component<ButtonProps> {
    public render() {
        return <>
            <input type='submit' value={this.props.text}/>
        </>
    }
}