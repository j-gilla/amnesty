import React from 'react';
import 'pdfjs-dist';

class PDFContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pdf: null,
			scale: 1.5
		};
	}
	getChildContext() {
		return {
			pdf: this.state.pdf,
			scale: this.state.scale
		};
	}
	componentDidMount() {
		PDFJS.getDocument(this.props.src).then((pdf) => {
			this.setState({ pdf });
		});
	}
	render() {
		return (<div className='pdf-context'>{this.props.children}</div>);
	}
}
PDFContainer.propTypes = {
	src: React.PropTypes.string.isRequired
};
PDFContainer.childContextTypes = {
	pdf: React.PropTypes.object,
	scale: React.PropTypes.number
};

export default PDFContainer;