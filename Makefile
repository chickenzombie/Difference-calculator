install:
	npm ci
publish: 
	npm publish --dry-run
gendiff:
	bin/gendiff
lint:
	npx eslint .
test:
	npm test
test-coverage:
	npm test -- --coverage
diff-json:
	gendiff __fixtures__/file1.json __fixtures__/file2.json