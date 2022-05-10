const clonedeep = require( 'lodash.clonedeep' );

// Image
const c_lazy_image_prototype = require( '@penskemediacorp/larva-patterns/components/c-lazy-image/c-lazy-image.prototype' );

const c_lazy_image = clonedeep( c_lazy_image_prototype );

c_lazy_image.c_lazy_image_srcset_attr = false;
c_lazy_image.c_lazy_image_sizes_attr = false;
c_lazy_image.c_lazy_image_classes += ' lrv-u-width-185';
c_lazy_image.c_lazy_image_crop_class = 'lrv-a-crop-1x1';

// Button
const button = clonedeep( require( '@penskemediacorp/larva-patterns/components/c-button/c-button.bordered' ) );

button.c_button_classes += ' a-buy-button';
button.c_button_screen_reader_text = 'Buy Now';
button.c_button_text = 'Buy Now';

// Export
module.exports = {
	c_lazy_image,
	button,
};
