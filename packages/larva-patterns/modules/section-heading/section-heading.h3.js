const clonedeep = require( 'lodash.clonedeep' );

const section_heading = clonedeep( require( './section-heading.prototype' ) );

section_heading.section_heading_level_text = '3';
section_heading.section_heading_typography_class = 'lrv-a-font-secondary-xl';
section_heading.c_dek = false;

module.exports = section_heading;