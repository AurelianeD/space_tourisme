dev:
	npm run dev


build:
  docker build . -t registry.peauc.dev/aurelianed/space_tourisme --platform linux/amd64

push: build
  docker push registry.peauc.dev/aurelianed/space_tourisme
