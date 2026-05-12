# Contributing

Thanks for helping keep the In Flames Song Sorter up to date. The most common contribution is adding a new release. This guide walks you through that, plus a few smaller edits.

## Testing locally

The site uses ES modules, which require an HTTP server (won't work via `file://`).

### Before you begin

1. Install Node.js and NPM at https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
2. Run `npm install`

### Running in a local browser

1. Run `npm start`
2. To stop the server later press `Ctrl + C`. If the server won't stop, run `npm run stop` and it will kill whatever is bound to port 8000.

## Verifying your data

A quick sanity check from the command line:

```bash
node --input-type=module -e "
import { ALBUMS, buildSongList } from './js/songlist.js';
console.log(ALBUMS.length, 'albums');
console.log(ALBUMS.reduce((n, a) => n + a.songs.length, 0), 'songs total');
for (const a of ALBUMS) console.log(a.year ?? '----', '-', a.title, '(' + a.songs.length + ' songs)' + (a.single ? ' [single]' : ''));
"
```

If the script throws an error, you have a syntax issue in `songlist.js`, usually a missing comma or unclosed quote.
