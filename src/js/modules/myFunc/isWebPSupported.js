/**check for that webp supported by browser */
export function isWebPSupported() {
	const testWebp = () => {
		const webP = new Image();
		webP.src = 'data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADwAQCdASoBAAEAAQAcJaACdLoB+AAETAAA/vW4f/6aR40jxpHxcP/ugT90CfugT/3NoAAA';
		return webP.onload === null || webP.onload instanceof Function;
	};
	// add class for HTML _webp

	let className = testWebp() === true ? 'webp' : 'no-webp';
	document.documentElement.classList.add(className);
}
