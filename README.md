
# Custom Express Server Rendering example with **next.js** **redux** and **react**

## How to use

### for enabling redux chrome tools in remote debugging:
````sudo npm  remotedev-server && remotedev --port=8080````
or once installed run in console ```` remotedev --port=8080 ````

in you store.js you have to set up devTools like:

````javascript
const composeEnhancers = composeWithDevTools({ realtime: true, port: 8080 });

export const initStore = (initialState) => {
  return createStore(reducer, initialState, composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ))
}
````

### Install it and run:

```bash
npm install
npm run dev
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now
```

## The idea behind the example

Most of the times the default Next server will be enough but sometimes you want to run your own server to customize routes or other kind of the app behavior. Next provides a [Custom server and routing](https://github.com/zeit/next.js#custom-server-and-routing) so you can customize as much as you want.

Because the Next.js server is just a node.js module you can combine it with any other part of the node.js ecosystem. in this case we are using express to build a custom router on top of Next.

The example shows a server that serves the component living in `pages/a.js` when the route `/b` is requested and `pages/b.js` when the route `/a` is accessed. This is obviously a non-standard routing strategy. You can see how this custom routing is being made inside `server.js`.
