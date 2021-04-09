const {
	generate,
} = require( '../../lib/generators' );

const expected = require( './expected' );

describe( 'Font Generators', () => {

	it( 'should output a CSS ruleset containing a-font CSS', () => {

		const output = generate( ['lrv-a-font-primary-xxl'] );

		expect( output ).toEqual( expected.ruleset );

	});

});