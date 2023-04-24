# MARVEL-APP
## Project Startup

To run this project, you will need the dependencies bellow:

- Marvel API key. Click [here](https://developer.marvel.com/) and select "Get a Key" to get a key!
- Android SDK installed with a configured emulator
- XCode installed with a configured emulator **(macOS only)**

Set the Marvel API keys on the file `marvel-app/src/config/api-key.ts`

```
import md5 from 'md5';

const ts = 'marvel-api';
const publicKey = 'public_key';
const privateKey = 'private_key';
const hash = md5(`${ts}${privateKey}${publicKey}`);

const apiKey = {
  ts,
  apikey: publicKey,
  hash,
};

export default apiKey;
```

If you are using NPM run:

```
$ npm install

$ npm run android
$ npm run ios
```

If you are using YARN run:

```
$ yarn install

$ yarn run android
$ yarn run ios
```
