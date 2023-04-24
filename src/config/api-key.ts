import md5 from 'md5';

const ts = 'marvel-api';
const publicKey = 'c31a3fefca2459e9eafe924529c9aaf6';
const privateKey = 'ec4afa3307c6a37302b0daee74a2d941674912be';
const hash = md5(`${ts}${privateKey}${publicKey}`);

const apiKey = {
  ts,
  apikey: publicKey,
  hash,
};

export default apiKey;
