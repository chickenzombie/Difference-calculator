install:
	npm ci
publish: 
	npm publish --dry-run
gendiff:
	bin/gendiff
lint:
	npx eslint .
tests:
	npm test
test-coverage:
	npm test -- --coverage
diff-json:
	gendiff __fixtures__/file1.json __fixtures__/file2.json