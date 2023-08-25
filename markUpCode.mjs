/*
all HTML and CSS as JS string
*/

export default class MarkUpCode {

	// helper
	static getHtmlTemplate(source) {
		const t = document.createElement('template')
		t.innerHTML = source
		return t.content
	}

  static html() {
    return `
    <link  href="./redist/ecl/ecl-eu.css" rel="stylesheet"/>

<div class="ecl-social-media-share ecl-social-media-share--vertical" id="main" style="
display:none;
position:absolute;

right:5px;
margin-top:5px;
width:140px;

padding: 10px;

z-index:5;

border-radius:4px;
border: 1px solid lightgrey;
">
  <p class="ecl-social-media-share__description" style="font: normal normal 400 1rem/1.5rem arial,sans-serif;
  font-weight: 700; color: #515560;">Share via:</p>
  <ul class="ecl-social-media-share__list">

  <li class="ecl-social-media-share__item" id="mail"><a
    class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-social-media-share__link"><svg
      class="ecl-icon ecl-icon--m ecl-link__icon ecl-social-media-share__icon" focusable="false" aria-hidden="true">
      <use xlink:href="./redist/ecl/icons-social-media.svg#email-color"></use>
    </svg><span class="ecl-link__label">Mail</span></a></li>

  <li class="ecl-social-media-share__item" id="fb"><a
    class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-social-media-share__link"><svg
      class="ecl-icon ecl-icon--m ecl-link__icon ecl-social-media-share__icon" focusable="false" aria-hidden="true">
      <use xlink:href="./redist/ecl/icons-social-media.svg#facebook-color"></use>
    </svg><span class="ecl-link__label">Facebook</span></a></li>

  <li class="ecl-social-media-share__item" id="twitx"><a
    class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-social-media-share__link"><svg
      class="ecl-icon ecl-icon--m ecl-link__icon ecl-social-media-share__icon" focusable="false" aria-hidden="true">
      <use xlink:href="./redist/ecl/icons-social-media.svg#twitter-color"></use>
    </svg><span class="ecl-link__label">Twitter</span></a></li>

    <li class="ecl-social-media-share__item" id="lin"><a
      class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-social-media-share__link"><svg
        class="ecl-icon ecl-icon--m ecl-link__icon ecl-social-media-share__icon" focusable="false" aria-hidden="true">
        <use xlink:href="./redist/ecl/icons-social-media.svg#linkedin-color"></use>
      </svg><span class="ecl-link__label">Linkedin</span></a></li>

  </ul>
</div>

    `
  }

 

  static css() {
    return `
    <style>
    </style>   
    `
  }

}
