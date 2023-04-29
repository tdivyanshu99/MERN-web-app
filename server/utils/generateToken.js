import jwt from 'jsonwebtoken'
import getSecretValueFromKeyVault from './azkeyvault.js';
const JWT_SECRET = (await getSecretValueFromKeyVault("jwtsecret")).value;

const generateToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: '30d',
  })
}

export default generateToken
