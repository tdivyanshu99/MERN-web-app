import { ClientSecretCredential } from "@azure/identity"; 
import { SecretClient } from "@azure/keyvault-secrets";

const AZURE_CLIENT_ID = "47407c34-8f7c-44ed-9324-8931aae2d5a0"
const AZURE_CLIENT_SECRET = "yzl8Q~nxqHJ0ilblET9bhDmHNaCb-ByKFIbFAaRk"
const AZURE_TENANT_ID = "22823687-42d9-40b1-94b1-ba85a005231e"

const credential = new ClientSecretCredential(AZURE_TENANT_ID, AZURE_CLIENT_ID, AZURE_CLIENT_SECRET);
const keyVaultUrl = "https://gadgetkv.vault.azure.net";
const client = new SecretClient(keyVaultUrl, credential);

const getSecretValueFromKeyVault = async (secretName) => {
    console.log("Fetching value from Azure key vault..");
    return await client.getSecret(secretName);
}

export default getSecretValueFromKeyVault;