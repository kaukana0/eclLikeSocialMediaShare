import MarkUpCode from  "./markUpCode.mjs"		// keep this file html/css free


class Element extends HTMLElement {

	#text = ""
	#hashTags = ""
	#mailSubject = ""
	#mailBody = ""
	#callback

	constructor() {	
		super()	
		this.attachShadow({mode: 'open'})
		const tmp = MarkUpCode.getHtmlTemplate(MarkUpCode.html()).cloneNode(true)
		this.shadowRoot.appendChild(tmp)
		this.#installEventHandlers()
	}

	static get observedAttributes() { return ["text", "hashtags", "mailsubject", "mailbody"] }

	attributeChangedCallback(name, oldVal, newVal) {
		if(name==="text") { this.#text = newVal	}
		if(name==="hashtags") { this.#hashTags = newVal	}
		if(name==="mailsubject") { this.#mailSubject = newVal	}
		if(name==="mailbody") { this.#mailBody = newVal	}
	}

	set callback(val){
		this.#callback = val
	}

	show() {
		this.shadowRoot.getElementById("main").style.display="block"
	}
	hide() {
		this.shadowRoot.getElementById("main").style.display="none"
	}
	toggleVisibility() {
		this.shadowRoot.getElementById("main").style.display = this.shadowRoot.getElementById("main").style.display==="none"?this.show():this.hide()
	}

	#installEventHandlers() {
		this.shadowRoot.getElementById("mail").addEventListener("click", e=> {
			this.hide()
			window.open(this.#buildURLmail(this.#mailSubject, this.#mailBody))
		})
		this.shadowRoot.getElementById("fb").addEventListener("click", e=> {
			this.hide()
			window.open(this.#buildURLfb(this.#text))
		})
		this.shadowRoot.getElementById("twitx").addEventListener("click", e=> {
			this.hide()
			window.open(this.#buildURLx(this.#text, this.#hashTags))
		})
		this.shadowRoot.getElementById("lin").addEventListener("click", e=> {
			this.hide()
			window.open(this.#buildURLLinkedIn())
		})
		this.shadowRoot.getElementById("embed").addEventListener("click", e=> {
			this.hide()
			if(this.#callback) {this.#callback(Element.getURLFromOGTag())}
		})
	}


	#buildURLmail(s,b) {
		return `mailto:?subject=${encodeURIComponent(s)}&body=${encodeURIComponent(b)}`
	}

	#buildURLfb(text) {
		return "https://www.facebook.com/sharer/sharer.php?u=" +
				encodeURIComponent(window.location.href) +
				'&t=' +
				encodeURIComponent(text)
	}

	#buildURLx(text, hashtags) {
		let retVal = 'https://twitter.com/intent/tweet'
		retVal += '?hashtags=' + encodeURI(hashtags)
		retVal += '&text=' + encodeURI(text)
		const rootPath = window.location.protocol + '//' + window.location.host + window.location.pathname + '?lang=' + String.locale
		retVal += '&url=' + encodeURI(rootPath)
		return retVal
	}

	#buildURLLinkedIn() {
		return "https://www.linkedin.com/sharing/share-offsite/?url=" +
				encodeURIComponent(window.location.href)
	}

	static getURLFromOGTag() {
		let retVal = ""
		const el = document.querySelector("meta[property='og:url']")
		if(el) {
			return el.getAttribute("content")
		}
		return retVal
	}


}

window.customElements.define('ecl-like-social-share', Element)
