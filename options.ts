'use strict';


// 1. Debugging Mode
// Often the output log will be verbose.
const DebuggingMode = 1;
// 2. Development Mode
// Features under development will be preferred.
const DevelopmentMode = 2;
// 3. Experimental, Professional or Radical Mode
// Beyond the production mode, with experimental features,
// which can be fallback to the conservative or production mode.
const ExperimentalMode = 3;
// 4. Production or Conservative Mode
const ProductionMode = 4;

const opts = {
	// The application, following runtime options, may be running in different modes:
	// With stability and reliability improved, the available features are less accessible.
	// @see https://stackoverflow.com/questions/23844667/how-do-i-detect-if-i-am-in-release-or-debug-mode
	// @see https://developer.android.com/studio/build/build-variants
	mode: ExperimentalMode,
};

const setAppMode = (mode: string) => {
	if (!mode) {return;}
	if (['deb', 'debug', 'debugging', 'verbose'].includes(mode)) {
		opts.mode = DebuggingMode;
	} else if (['dev', 'develop', 'development', 'obsolete'].includes(mode)) {
		opts.mode = DevelopmentMode;
	} else if (['exp', 'experimental', 'pro', 'professional', 'radical'].includes(mode)) {
		opts.mode = ExperimentalMode;
	} else if (['csv', 'conservative', 'prod', 'product', 'production', 'friendly'].includes(mode)) {
		opts.mode = ProductionMode;
	} else {
		console.warn('Unrecognized app mode received:', mode);
	}
};

// @see https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
const params = new URLSearchParams(window.location.search);
const mode = params.get('edom') || '';
// Set the initial app mode following query params from the URL.
setAppMode(mode);

// Exported as options manager of the current application named as the "opt".
// It is not a universal utility, because it is opinionated.
// It is however related to nearly universal applications, as the common powers or so-called infrastructures.
// Currently contains the option of debugging mode in runtime.
export const opt = {
	setAppMode,

	isProductionMode: (): boolean => opts.mode === ProductionMode,

	// DebuggingMode will be true.
	isDebuggingAllowed: (): boolean => opts.mode === DebuggingMode,
	// DebuggingMode and DevelopmentMode will be true.
	isDevelopmentAllowed: (): boolean => opts.mode <= DevelopmentMode,
	// DebuggingMode and DevelopmentMode and ExperimentalMode will be true.
	isExperimentalAllowed: (): boolean => opts.mode <= ExperimentalMode,
};
