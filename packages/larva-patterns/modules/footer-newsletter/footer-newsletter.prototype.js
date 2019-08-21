const path = require( 'path' );
const clone = require( '@penskemediacorp/larva' ).clone;// This should be in this repo, probably
const o_email_capture_form = clone( path.resolve( __dirname, '../../objects/o-email-capture-form/o-email-capture-form.minimal' ) );

o_email_capture_form.c_button.c_button_classes += ' lrv-a-icon-invert';

module.exports = {
	"footer_newsletter_classes": "lrv-u-text-align-center lrv-u-color-white lrv-u-background-black lrv-u-flex lrv-u-flex-direction-column lrv-u-align-items-center",
	"c_title": {
		"c_title_classes": "lrv-u-margin-b-025 lrv-u-font-family-primary lrv-u-text-align-center",
		"c_title_text": "Stay In The Know"
	},
	"c_tagline": {
		"c_tagline_classes": "lrv-u-font-size-14 u-font-style-italic lrv-u-font-family-basic lrv-u-text-align-center",
		"c_tagline_text": "Sign up for our daily newsletter"
	},
	"o_email_capture_form": o_email_capture_form
};