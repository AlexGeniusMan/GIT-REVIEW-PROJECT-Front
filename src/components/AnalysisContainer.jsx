import React, {Component} from 'react';
import Analysis from "./Analysis";
import axios from 'axios';
import {getFormData} from "../utils/utils";

class AnalysisContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            pie_chart: '',
            languages: [],
            error: false
        }
        this.onChangeInput = this.onChangeInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    onChangeInput(el) {
        this.setState({
            username: el.target.value
        })
    }


    handleSubmit() {
        const base_url = process.env.REACT_APP_PRODUCTION_URL
        // const base_url = "http://localhost:8000/"
        let data = getFormData([{name: 'username', value: this.state.username}])
        axios.post(base_url + `api/language_analise`, data)
            .then(response => {
                if (response.status === 200)
                    this.setState({
                        pie_chart: base_url + response.data.pie_chart,
                        languages: response.data.languages,
                        error: false
                    })
            })
            .catch(error => {
                this.setState({
                    error: true
                })
            })
    }

    render() {
        return (
            <div>
                <Analysis username={this.state.username}
                          pie_chart={this.state.pie_chart}
                          languages={this.state.languages}
                          error={this.state.error}
                          onChangeInput={this.onChangeInput}
                          handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}

export default AnalysisContainer;