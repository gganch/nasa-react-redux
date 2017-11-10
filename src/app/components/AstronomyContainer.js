import React, { Component } from 'react';
import AstronomyCard from './AstronomyCard';
import { connect } from 'react-redux'
import fetchData from '../actions/fetch_data';

//THIS area is what maintainig state inside w/o REDUX looks like
// class AstronomyContainer extends  Component {

//     constructor() {

//         super();

//         this.state = {
//             astronomy: []
//         }
//     }

//     componentDidMount() {
//         const API_KEY = 'ViX2t89PxuTvq7AALaKPKE7DfEOmCByABzSJ0JGq';
//         const END_POINT = 'https://api.nasa.gov/planetary/apod?api_key='

//         axios.get(END_POINT+API_KEY)
//             .then(response => {
//                 this.setState({
//                     astronomy: response.data
//                 })
//                 console.log(this.state.astronomy)
//             })
//             .catch(error => {
//                 console.log(error, 'failed to fetch data')
//             });
//     }

//     render() {
//         const {astronomy} = this.state;
//         return (
//             <AstronomyCard data={astronomy} />
//         )
//     }
// }

// export default AstronomyContainer;

class AstronomyContainer extends Component {
    componentWillMount() {
        this.props.fetchData();
    }

    render() {

		return (
			<AstronomyCard data={this.props.astronomy} />
		);

	}

}

function mapStateToProps(state) {
        return {astronomy: state.astronomy};
    }

export default connect(mapStateToProps, { fetchData })(AstronomyContainer);