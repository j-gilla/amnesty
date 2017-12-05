import React from 'react';
import PDFContainer from './PDFContainer';
import PDFViewer from './PDFViewer';

class PDFDocument extends React.Component {
	render() {
		return (
            <PDFContainer src={this.props.src} >
                <PDFViewer />
            </PDFContainer>
		);
	}
}

export default PDFDocument;

