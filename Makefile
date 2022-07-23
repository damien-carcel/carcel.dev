SHELL = bash

.PHONY: help
help:
	@echo "-----------------"
	@echo "- Main commands -"
	@echo "-----------------"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?#main# .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?#main# "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
	@echo ""
	@echo "----------------------"
	@echo "- Secondary commands -"
	@echo "----------------------"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.DEFAULT_GOAL := help

# Application dependencies

yarn.lock: package.json
	@yarn install

node_modules: yarn.lock
	@yarn install --frozen-lockfile --check-files

.PHONY: install
install: node_modules ## Install project dependencies

.PHONY: update
update: ## Updates project dependencies to their latest version (works only if project dependencies were installed at least once)
	@yarn upgrade-interactive --latest
	@yarn upgrade

# Serve and build-prod

.PHONY: dev
dev: node_modules #main# Run the application using ViteJS dev server
	@yarn dev

.PHONY: build
build: node_modules #main# Build the production artifacts
	@yarn builddev

.PHONY: serve
serve: node_modules #main# Preview the production build
	@yarn serve

# Tests

.PHONY: tests
tests: node_modules #main# Execute all the tests
	@echo ""
	@echo "|----------------------|"
	@echo "| Lint the stylesheets |"
	@echo "|----------------------|"
	@echo ""
	@make stylelint
	@echo ""
	@echo "|------------------|"
	@echo "| Lint the JS code |"
	@echo "|------------------|"
	@echo ""
	@make eslint

.PHONY: stylelint
stylelint: ## Lint the CSS code
	@yarn run -s stylelint

.PHONY: eslint
eslint: ## Lint the TypeScript code.
	@yarn -s eslint

