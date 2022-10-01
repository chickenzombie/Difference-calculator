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
diff:
	gendiff __fixtures__/file1.json __fixtures__/file2.json
diff-plain:
	gendiff --format plain __fixtures__/file1.json __fixtures__/file2.json
diff-yml:
	gendiff __fixtures__/file1.yml __fixtures__/file2.yml
diff-yml-plain:
	gendiff --format plain __fixtures__/file1.yml __fixtures__/file2.yml
diff-json:
	gendiff --format json __fixtures__/file1.json __fixtures__/file2.json
diff-yml-json:
	gendiff --format json __fixtures__/file1.yml __fixtures__/file2.yml
rec:
	asciinema rec