SHELL = bash

ifeq ($(CI),true)
	YARN = yarn
else
	YARN = docker compose run --rm --service-ports node yarn
endif

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

~/.yarnrc:
	touch ~/.yarnrc

~/.config/yarn:
	mkdir -p ~/.config/yarn

~/.cache/yarn:
	mkdir -p ~/.cache/yarn

.PHONY: yarn-config-and-cache
yarn-config-and-cache: ~/.yarnrc ~/.config/yarn ~/.cache/yarn

.PHONY: pull
pull: ## Pull all Docker images.
ifneq ($(CI),true)
	docker compose pull
endif

.PHONY: install
install: yarn-config-and-cache pull ## Install project dependencies.
ifeq ($(wildcard yarn.lock),)
	@echo "Install the Node modules according to package.json"
	@$(YARN) install
else
	@echo "Install the Node modules according to yarn.lock"
	@$(YARN) install --frozen-lockfile --check-files
endif

.PHONY: upgrade
upgrade: yarn-config-and-cache pull ## Updates project dependencies to their latest version (works only if project dependencies were already installed).
	@$(YARN) upgrade
	@$(YARN) upgrade-interactive --latest
	@$(YARN) upgrade

# Serve and build-prod

.PHONY: dev
dev: pull install #main# Run the application using ViteJS dev server.
	@$(YARN) dev

.PHONY: prod
prod: pull install #main# Preview the production build.
	@$(YARN) start

.PHONY: build
build: pull install #main# Build the production artifacts.
	@$(YARN) build

# Tests

.PHONY: tests
tests: pull install #main# Execute all the tests.
	@echo ""
	@echo "|----------------------|"
	@echo "| Lint the stylesheets |"
	@echo "|----------------------|"
	@echo ""
	@make stylelint
	@echo ""
	@echo "|----------------------|"
	@echo "| Check the code style |"
	@echo "|----------------------|"
	@echo ""
	@make prettier
	@echo ""
	@echo "|------------------|"
	@echo "| Lint the TS code |"
	@echo "|------------------|"
	@echo ""
	@make eslint

.PHONY: stylelint
stylelint: ## Lint the CSS code.
	@$(YARN) stylelint

.PHONY: fix-stylelint
fix-stylelint: ## Fix the CSS code style.
	@$(YARN) stylelint --fix

.PHONY: prettier
prettier: ## Check the code style.
	@$(YARN) prettier --check

.PHONY: fix-prettier
fix-prettier: ## Fix the code style.
	@$(YARN) prettier --write

.PHONY: eslint
eslint: ## Lint the TypeScript code.
	@$(YARN) eslint
