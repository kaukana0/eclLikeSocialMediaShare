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

    <style>
    .ecl-pseudopopover__container:before {
      background-color: #fff;
      box-shadow: 0 7px 8px rgba(9,49,142,.08),0 0 22px rgba(9,49,142,.04),0 12px 17px rgba(9,49,142,.04),0 -4px 4px rgba(9,49,142,.04);
      -webkit-clip-path: polygon(-8px -8px,calc(100% + 8px) -8px,calc(100% + 8px) calc(100% + 8px));
      clip-path: polygon(-8px -8px,calc(100% + 8px) -8px,calc(100% + 8px) calc(100% + 8px));
      content: "";
      height: 1rem;
      left: 50%;
      margin-left: 80px;
      position: absolute;
      top: 0;
      transform: translateY(-50%) rotate(-45deg);
      width: 1rem
  }

  a > span {
    font-size: 16px;
  }
    </style>

<div class="ecl-pseudopopover__container ecl-social-media-share ecl-social-media-share--vertical" id="main" style="
display:none;
position:absolute;

/* right:5px; */
margin-top:25px;
margin-left:-235px;
width:200px;

padding: 10px;

z-index:5;

box-shadow: 0 7px 8px rgba(9,49,142,.08),0 0 22px rgba(9,49,142,.04),0 12px 17px rgba(9,49,142,.04),0 -4px 4px rgba(9,49,142,.04);
">
  <p class="ecl-social-media-share__description" style="font: normal normal bold 16px/16px Arial; letter-spacing: 0px;
  text-align: left; font-weight: 400; color: #171A22;">Share</p>
  <ul class="ecl-social-media-share__list">

  <li class="ecl-social-media-share__item" id="fb" style="cursor:pointer;"><a
    class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-social-media-share__link"><svg
      class="ecl-icon ecl-icon--m ecl-link__icon ecl-social-media-share__icon" focusable="false" aria-hidden="true">
      <use xlink:href="./redist/ecl/icons-social-media.svg#facebook-color"></use>
    </svg><span class="ecl-link__label">Facebook</span></a></li>


    <li class="ecl-social-media-share__item" id="twitx" style="cursor:pointer;"><a
    class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-social-media-share__link"><svg
      class="ecl-icon ecl-icon--m ecl-link__icon ecl-social-media-share__icon" focusable="false" aria-hidden="true">
      <use xlink:href="./redist/ecl/icons-social-media4.svg#twitter-color"></use>
    </svg><span class="ecl-link__label">X</span></a></li>


    <li class="ecl-social-media-share__item" id="lin" style="cursor:pointer;"><a
      class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-social-media-share__link"><svg
        class="ecl-icon ecl-icon--m ecl-link__icon ecl-social-media-share__icon" focusable="false" aria-hidden="true">
        <use xlink:href="./redist/ecl/icons-social-media.svg#linkedin-color"></use>
      </svg><span class="ecl-link__label">Linkedin</span></a></li>


      <li class="ecl-social-media-share__item" id="mail" style="cursor:pointer;"><a
      class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-social-media-share__link"><svg
        class="ecl-icon ecl-icon--m ecl-link__icon ecl-social-media-share__icon" focusable="false" aria-hidden="true">
        <use xlink:href="./redist/ecl/icons-social-media.svg#email-color"></use>
      </svg><span class="ecl-link__label">Email</span></a></li>

    <li class="ecl-social-media-share__item" id="embed" style="cursor:pointer;"><a
      class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-social-media-share__link">
      <img src="./img/code-solid.svg"
        class="ecl-icon ecl-icon--m ecl-link__icon ecl-social-media-share__icon" focusable="false" aria-hidden="true"/>
      <span class="ecl-link__label">Embed</span></a></li>


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
