import React from 'react';
import localforage from 'localforage';

interface ResultsState {
    results: Array<string>
}

class Results extends React.Component<{}, ResultsState> {

    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            results: []
        }
        localforage.keys().then((keys) => keys.sort((a, b) => Number(a) - Number(b)).map((key) => localforage.getItem(key).then((record) =>
            this.setState({ results: this.state.results.concat(key + " : "+ record as string) })
        )));
    }

    public render() {
        let recoders = this.state.results.map((record, index) =>
            <div key={index}>
                <label>{record}</label>
            </div>
        )
        return <div>
            <div>
                <label>Records</label>
            </div>
            {recoders}
        </div>
    }
}

export default Results