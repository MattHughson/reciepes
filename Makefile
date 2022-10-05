.PHONY: build
build:
	mkdir -p bin
	go build -trimpath -o bin/reciepes


.PHONY: run
run:
	go run main.go