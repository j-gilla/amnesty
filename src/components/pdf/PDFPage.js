import React from 'react';
import PDFContainer from './PDFContainer';

class PDFPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			status: 'N/A',
			page: null,
			width: 0,
			height: 0
		};
	}
	shouldComponentUpdate(nextProps, nextState, nextContext) {
		return this.context.pdf != nextContext.pdf || this.state.status !== nextState.status;
	}
	componentDidUpdate(nextProps, nextState, nextContext) {
		this._update(nextContext.pdf);
	}
	componentDidMount() {
		this._update(this.context.pdf);
	}
	_update(pdf) {
		if (pdf) {
			this._loadPage(pdf);
		} else {
			this.setState({ status: 'loading' });
		}
	}
	_loadPage(pdf) {
		if (this.state.status === 'rendering' || this.state.page != null) return;
		pdf.getPage(this.props.index).then(this._renderPage.bind(this));
		this.setState({ status: 'rendering' });
	}
	_renderPage(page) {
		let { scale } = this.context;
		let viewport = page.getViewport(scale);
		let { width, height } = viewport;
		let canvas = this.refs.canvas;
		let context = canvas.getContext('2d');
		canvas.width = width;
		canvas.height = height;

		page.render({
			canvasContext: context,
			viewport
		});

		this.setState({ status: 'rendered', page, width, height });
	}
	render() {
		let { width, height, status } = this.state;
		return (
			<div className={`pdf-page ` + status} style={{ width, height, margin: "auto" }}>
				<canvas ref='canvas' />
			</div>
		);
	}
}
PDFPage.propTypes = {
	index: React.PropTypes.number.isRequired
}
PDFPage.contextTypes = PDFContainer.childContextTypes

export default PDFPage;