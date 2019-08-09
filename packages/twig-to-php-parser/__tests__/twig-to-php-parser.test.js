const assert = require( 'assert' );
const path = require( 'path' );
const fs = require( 'fs' );
const twigToPhpParser = require( '../index' ).twigToPhpParser;
const exec = require( 'child_process' ).exec;

const fixture = path.join( __dirname, 'fixtures' );

const pathConfig = {
	twigDir: `${fixture}/src/patterns/`,
	phpDir: `${fixture}/template-parts/patterns/`,
	expectedDir: `${fixture}/template-parts-expected/patterns/`,
};

const patternShortPaths = [
	'components/c-byline.php',
	'components/c-heading.php',
	'components/c-button.php',
	'objects/o-nav.php',
	'objects/o-story-list.php',
	'modules/trending.php',
];

describe( 'twig to php parser', function() {

	beforeEach( ( done ) => {
		exec( 'mkdir ' + pathConfig.phpDir, ( err  ) => {
			if ( err ) {
				console.error( err );
			}
		});

		return twigToPhpParser( pathConfig.twigDir, pathConfig.phpDir )
		.catch( ( e ) => console.log( e ) )
		.then( ( result ) => done() ); // Catch PHP errors.
	});

	it( 'creates new files and directories for objects, components, and modules', ( done ) => {
		assert.equal( fs.existsSync( pathConfig.phpDir + 'objects/o-nav.php' ), true );
		assert.equal( fs.existsSync( pathConfig.phpDir + 'components/c-nav-link.php' ), true );
		assert.equal( fs.existsSync( pathConfig.phpDir + 'modules/breadcrumbs.php' ), true );
		done();
	});

	it( 'parses patterns as expected', ( done ) => {
		patternShortPaths.forEach( ( shortpath ) => {
			let expectedContents = fs.readFileSync( pathConfig.expectedDir + shortpath ).toString();
			let actualContents = fs.readFileSync( pathConfig.phpDir + shortpath ).toString();
			
			assert.equal( expectedContents, actualContents );
		});
		done();
	});

	afterEach( () => {
		exec( 'rm -r ' + pathConfig.phpDir, ( err ) => {
			if ( err ) {
				console.error( err );
			}
		});
	});

});
