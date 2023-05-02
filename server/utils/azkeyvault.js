import { ClientSecretCredential } from "@azure/identity"; 
import { SecretClient } from "@azure/keyvault-secrets";
import dotenv from 'dotenv';

dotenv.config()

const AZURE_CLIENT_ID = process.env.AZURE_CLIENT_ID;
const AZURE_CLIENT_SECRET = process.env.AZURE_CLIENT_SECRET;
const AZURE_TENANT_ID = process.env.AZURE_TENANT_ID;

const credential = new ClientSecretCredential(AZURE_TENANT_ID, AZURE_CLIENT_ID, AZURE_CLIENT_SECRET);
const keyVaultUrl = "https://gadgetkv.vault.azure.net";
const client = new SecretClient(keyVaultUrl, credential);

const getSecretValueFromKeyVault = async (secretName) => {
    console.log("Fetching value from Azure key vault..");
    return await client.getSecret(secretName);
}

export default getSecretValueFromKeyVault;