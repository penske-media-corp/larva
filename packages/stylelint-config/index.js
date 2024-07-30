module.exports = {
	rules: {
		"at-rule-disallowed-list": [
			"extend"
		],
		"at-rule-empty-line-before": [
			"always",
			{
				ignore: [
					"after-comment",
					"first-nested",
					"blockless-after-blockless"
				],
				ignoreAtRules: [
					"else",
					"import"
				]
			}
		],
		"block-closing-brace-newline-after": [
			"always",
			{
				ignoreAtRules: [
					"if",
					"else"
				]
			}
		],
		"block-opening-brace-newline-after": "always-multi-line",
		"block-opening-brace-space-before": "always",
		"comment-no-empty": true,
		"declaration-bang-space-before": "always",
		"declaration-block-no-shorthand-property-overrides": true,
		"declaration-block-semicolon-newline-after": "always",
		"declaration-block-single-line-max-declarations": 1,
		"declaration-block-trailing-semicolon": "always",
		"declaration-colon-space-after": "always",
		"declaration-colon-space-before": "never",
		"declaration-no-important": true,
		"declaration-property-unit-disallowed-list": {
			"/^animation/": [
				"s"
			],
			"/^transition/": [
				"s"
			],
			"font-size": [
				"em",
				"px",
				"pt"
			]
		},
		"font-family-name-quotes": "always-where-recommended",
		"font-family-no-missing-generic-family-keyword": true,
		"function-calc-no-unspaced-operator": true,
		"function-disallowed-list": [
			"hsla",
			"hsl"
		],
		"function-name-case": "lower",
		"function-url-no-scheme-relative": true,
		"function-url-quotes": "always",
		"function-url-scheme-disallowed-list": [
			"/^http/",
			"ftp"
		],
		"max-empty-lines": 2,
		"max-nesting-depth": [
			2,
			{
				ignore: [
					"pseudo-classes"
				],
				ignoreAtRules: [
					"media",
					"include"
				]
			}
		],
		"no-descending-specificity": true,
		"no-duplicate-at-import-rules": true,
		"no-duplicate-selectors": true,
		"no-unknown-animations": true,
		"number-leading-zero": "always",
		"number-max-precision": 3,
		"property-case": "lower",
		"property-disallowed-list": [
			"background",
			"font",
			"animation"
		],
		"property-no-unknown": true,
		"property-no-vendor-prefix": true,
		"rule-empty-line-before": [
			"always-multi-line",
			{
				ignore: [
					"first-nested",
					"after-comment"
				]
			}
		],
		"selector-combinator-space-after": "always",
		"selector-list-comma-newline-after": "always",
		"selector-list-comma-space-after": "always-single-line",
		"selector-max-attribute": 3,
		"selector-max-class": 2,
		"selector-max-combinators": 3,
		"selector-max-compound-selectors": 2,
		"selector-max-specificity": "0,3,1",
		"selector-nested-pattern": "^(?!&__|&--).*",
		"selector-no-qualifying-type": true,
		"selector-pseudo-element-colon-notation": "double",
		"shorthand-property-no-redundant-values": true,
		"string-quotes": "single",
		"unit-disallowed-list": [
			"px",
			{
				ignoreProperties: {
					px: [
						"box-shadow",
						"/^border/",
						"transform",
						"clip"
					]
				}
			}
		],
		"unit-no-unknown": true,
		"value-list-comma-space-after": "always-single-line"
	},
};
