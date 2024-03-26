import MarkUpCode from  "./markUpCode.mjs"		// keep this file html/css free


class Element extends HTMLElement {

	#text = ""
	#hashTags = ""
	#mailSubject = ""
	#mailBody = ""
	#to

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

	show() {
		clearTimeout(this.#to)
		this.shadowRoot.getElementById("main").style.display="block"
		this.#to = setTimeout(()=>this.hide(), 15000)
	}
	hide() {
		clearTimeout(this.#to)
		this.shadowRoot.getElementById("main").style.display="none"
	}
	toggleVisibility() {
		clearTimeout(this.#to)
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

}

window.customElements.define('ecl-like-social-share', Element)
