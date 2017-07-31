# Quick Proxy

[![Code-Style:Standard](https://img.shields.io/badge/code%20style-standard-green.svg?style=flat-square)](http://standardjs.com/) [![License:MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](http://opensource.org/licenses/MIT)

Quickly spin up an HTTP proxy for a given target URL.

Quick Proxy replicates every request sent from the client to a server and every response from the server to the client.

## Use Cases

* Domain masking
* HTTP Interception
* HTTP Monitoring
* HTTP Filtering
* Logging
* Anonymous browsing
* Educational purposes 👀

## One-click Cloud Deploys

You can deploy a Quick Proxy server to any of these services with just one click!

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/krismuniz/quick-proxy.git)

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/krismuniz/quick-proxy.git)

[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/import/github/krismuniz/quick-proxy)

## Deploy Locally

#### Clone the Repo

```bash
$ git clone git@github.com:krismuniz/quick-proxy.git quick-proxy
```

#### Install dependencies

```bash
$ npm install
```

#### Start the server with `URL` and `PORT` environment variables

```bash
$ npm start URL=http://example.com PORT=3000
```
