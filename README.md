# Authorizing JSONAPI::Resources Client

A sample client for accessing the [Authorizing JSONAPI::Resources][api] web service.

Note that the client has an intentional bad UX: it displays "Edit" and "Delete" buttons even for records that the user doesn't have access to modify. This makes it easy to confirm that the rules preventing modifying other users' records are working.

## Requirements

* NPM 2.7 or higher
* Bower (version requirement unknown; whatever Ember 2.7 requires)
* Ember-CLI 2.7 or higher

## Installation

This app expects the [Authorizing JSONAPI::Resources][api] web service to be running and accessible at http://localhost:3000.

```
npm install
bower install
ember serve
```

## License

MIT

[api]: https://github.com/bignerdranch/authorizing-jsonapi-resources
