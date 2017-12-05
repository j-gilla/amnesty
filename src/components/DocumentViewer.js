import React from 'react';
import PDFDocument from './pdf/PDFDocument';
import { connect } from 'react-redux';
import {scrollTo, cloneCanvas} from '../js/util';
import '../style/DocumentViewer.scss';

const tabletBreakPoint = 992;

class DocumentViewer extends React.Component {
	constructor(props) {
		super(props);
		this.containerId = "document-" + new Date().getTime();
		this.maskId = "mask-" + new Date().getTime();
    this.pdfPageClass = "pdf-page";
		this.state = {
			loaded: false
		};
	}
	renderMask() {
		const {top_in_percent : topPercent, height_in_percent : heightPercent} = this.props.focusArea;
		return (
			<div>
				<div className={"document-mask-blurry top"} style={{
					height: topPercent + "%",
				}}></div>
				<div className={"document-mask-blurry left"} id="mask-focus-left" style={{
					top: topPercent + "%",
					height: heightPercent + "%"
				}}></div>
				<div id={this.maskId} className={"document-mask-focus"} style={{
					top: topPercent + "%",
					height: this.state.loaded ? heightPercent + "%" : 0,
					borderColor: this.state.loaded ? "yellow" : "transparent"
				}}>
					{ this.state.loaded ? 
					<span className={"question-number"}>
						{this.props.number}
					</span>
					: null }
				</div>
				<div className={"document-mask-blurry right"} id="mask-focus-right" style={{
					top: topPercent + "%",
					left: "auto",
					right: 0,
					height: heightPercent + "%",
				}}></div>
				<div className={"document-mask-blurry bottom"} style={{
					top: (topPercent + heightPercent) + "%",
					height: 100 - (topPercent + heightPercent) + "%",
				}}></div>
			</div>
		);
	}
	render() {
		return (
			<div id={this.containerId} className={"document-viewer"}>
				<PDFDocument src={this.props.file} />
				{this.renderMask()}
				<div className="modal fade" id="popupModal" tabIndex="-1" role="dialog">
					<div className="modal-dialog modal-lg" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									Close <span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<span className={"question-number"}>
									{this.props.number}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
	componentDidMount() {
		setTimeout(() => {
			this.setState({
				loaded: true
			});
			window.onresize = () => {
				this.adjustView();
			}
			this.adjustView();
		}, 2000);
		this.popupModal = $('#popupModal');
		this.popupModal.on('hidden.bs.modal', (e) => {
			this.focus();
		});
	}
	componentDidUpdate(prevProps, prevState) {
		const isLocalStateChanged = (prevProps.number === this.props.number);
		const isComponentFirstUpdated = (prevState.loaded === false);
		if (isComponentFirstUpdated || !isLocalStateChanged) {
			this.focus();
			this.adjustView();
		}
	}
	focus() {
		const container = document.body;
		const mask = document.getElementById(this.maskId);
		const offset = (window.innerWidth >= tabletBreakPoint ? 32 : -10);
		const scrollToPoint = mask.offsetTop + offset;
		scrollTo(container, scrollToPoint, 300);
	}
	adjustView() {
		this.adjustDocumentPosition();
		this.adjustMask();
	}
	adjustMask() {
		const containerWidth = document.getElementsByClassName("pdf-context")[0].clientWidth;
		const pageWidth = document.getElementsByClassName(this.pdfPageClass)[0].clientWidth;
		const maskWidth = pageWidth + 40;
		const mask = document.getElementById(this.maskId),
			  maskLeft = document.getElementById("mask-focus-left"),
			  maskRight = document.getElementById("mask-focus-right");
		let maskPadding = (containerWidth - maskWidth) / 2;
		if (maskPadding < 0) {
			maskPadding = 0;
		}
		mask.style.width = maskWidth + "px";
		mask.style.left = maskPadding + "px";
		maskLeft.style.width = maskPadding + "px";
		maskRight.style.width = (this.getDocumentContainer().clientWidth - maskPadding - maskWidth) + "px";
	}
	adjustDocumentPosition() {
		const container = this.getDocumentContainer();
		const navbarHeight = document.getElementsByClassName("header-menu")[0].clientHeight;
		const taskToolbarHeight = document.getElementsByClassName("task-toolbar")[0].clientHeight;
		const questionContainerHeight = document.getElementsByClassName("ques-container")[0].clientHeight;
		if (window.innerWidth < tabletBreakPoint) {
			container.style.top = navbarHeight + taskToolbarHeight + questionContainerHeight + "px";
		} else {
			container.style.top = "";
		}
	}
	getDocumentContainer() {
		return document.getElementById(this.containerId);
	}
	popup() {
		let popupBody = this.popupModal.find(".modal-body");
    const oldPopupPdfPage = popupBody.find("canvas");
    if (oldPopupPdfPage.length) {
      oldPopupPdfPage.remove();
    }
		const pages = this.getPagesDom();
    const currentPageContainer = pages.get([this.getCurrentPageIndex()]);
    const currentPdfCanvas = currentPageContainer.childNodes[0];
    popupBody.append(cloneCanvas(currentPdfCanvas));
		popupBody.find(".question-number").css({
			top: (this.props.focusArea.top_in_percent * pages.length) + "%"
		});
		this.popupModal.modal();
	}
  getCurrentPageIndex() {
    const pageLengthInPercent = 100 / this.getPagesDom().length;
    const mask = document.getElementById(this.maskId);
    const mastTopInPercent = parseFloat(mask.style.top);
    return Math.floor(mastTopInPercent / pageLengthInPercent);
  }
	getPagesDom() {
		return $("#" + this.containerId + " ." + this.pdfPageClass);
	}
}

const mapStateToProps = (state) => {
	return {
		focusArea: state.presenter.questions[state.presenter.current_question_index].position_in_asset,
		number: state.presenter.current_question_index + 1
	}
}

export default connect(mapStateToProps, null, null, { withRef: true })(DocumentViewer);