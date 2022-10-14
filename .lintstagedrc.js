const path = require("path");

const eslintCommand = (filenames) =>
	`next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(" --file ")}`;

const prettierCommand = (filenames) =>
	`yarn prettier --write ${filenames
		.map((f) => path.relative(process.cwd(), f))
		.join(" ")} --config ./.prettierrc.json`;

module.exports = {
	"*.{js,jsx}": [eslintCommand, prettierCommand],
	"*.{js,jsx,json,md}": [prettierCommand],
};
