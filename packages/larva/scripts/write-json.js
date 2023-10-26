const chalk = import( 'chalk' );

const getAppConfiguration = require( '../lib/utils/getAppConfiguration' );
const getArgsFromCli = require( '../lib/utils/getArgsFromCli' );
const writeJson = require( '../lib/writeJson' );

const config = getAppConfiguration( 'patterns' );
const cliArgs = getArgsFromCli();

const fromLarva = 'larva' === cliArgs[ 1 ] ? true : false;

console.log(
	chalk.bold( `\n---- ${ cliArgs[ 1 ] || 'Project' } JSON ----\n` )
);

writeJson( config, fromLarva );
