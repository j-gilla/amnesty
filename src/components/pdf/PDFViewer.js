import React from 'react';
import PDFPage from './PDFPage';
import PDFContainer from './PDFContainer';

class PDFViewer extends React.Component {
	render() {
		let { pdf } = this.context;
		let numPages = pdf ? pdf.pdfInfo.numPages : 0;
		let fingerprint = pdf ? pdf.pdfInfo.fingerprint : 'none';
		let pages = Array.apply(null, { length: numPages })
			.map((v, i) => (<PDFPage index={i + 1} key={`${fingerprint}-${i}`} />));

		return (
			<div className='pdf-viewer'>
				{pages}
			</div>
		);
	}
}
PDFViewer.contextTypes = PDFContainer.childContextTypes;

export default PDFViewer;