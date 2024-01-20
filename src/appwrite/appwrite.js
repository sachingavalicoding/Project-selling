import { Account, Client } from 'appwrite';

const appwrite = new Client();

appwrite
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("65ac1e1af0ee05abe0ef");

export const account = new Account(Client);
export default appwrite;