

# GrootDefi

This project was generated using [Nx](https://nx.dev).

## Development server

Run `nx serve groot-ui` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Docker

Run `nx docker groot-ui` to build a docker image from your dist folder. This should be done _after_ a production build

To test your newly-created prod container, you can `docker run -p80:80 groot-ui:latest`.

If you want to serve on your port 8000, you would alter that command to `docker run -p8000:80 groot-ui:latest`.

`docker ps` will give you the list of running containers, which should then include your running server.
`docker stop {container id}` will stop that container if you lost track of it otherwise.
`docker rm {container id}` will delete that container.

If you absolutely have to remove an image: `docker rmi Image`

Can't find the container id? That's what `docker ps` is for.

### Docker image to a server

As part of the `nx docker` step, `dist/groot-ui.tar` is created. This is a tarball of the docker image.
It was created with `docker save --output ./dist/groot-ui.tar groot-ui:latest`
To load this image, one needs to run `docker load --input groot-ui.tar`.
So, push this image to the server, then load it, and all should be good.
*IMPORTANT* The container of the site image must be stopped/started for the
nginx-proxy to go through its process of restarting nginx with the new data.

## Nginx Proxy
https://github.com/nginx-proxy/nginx-proxy

Run the nginx proxy with `docker run -d -p 80:80 -v /var/run/docker.sock:/tmp/docker.sock:ro jwilder/nginx-proxy`

Then run the site image with `docker run -e VIRTUAL_HOST=localhost groot-ui:latest`
Obviously, you'll change "localhost" to any virtual hostname you want to use.

*TODO: Iteratively, we'll add ssl to this.*

## Docker, faster
I've also set up a docker-compose.yml file. Just write `docker-compose up`
to get things running on localhost with the nginx proxy and the groot-ui:latest image.

## Publishing to the server
(currently specific to user)
scp dist/groot-ui-latest.tar {username}@104.168.201.10:/home/{username}/groot-ui-latest.tar
ssh {username}@104.168.201.10
cd /home/{username}
docker load --input groot-ui-latest.tar

## Server
In /var/www, you can execute `docker-compose up -d` to start things up
(perpetualdice)

## Compilation pain
Some web3 modules think they're node. Modify tsconfig.base.json to use the appropriate
polyfill, as provided in this linked list.
https://github.com/azu/node-browser-polyfill-gap
