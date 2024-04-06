# UCBS Mountain Retreat NFT Workshop - ERC721 Drop Claim Page 🗻

This documentation outlines the process for creating an ERC721 Drop claim page, tailored specifically for the UCBS Mountain Retreat NFT Workshop. By customizing the provided template with your unique branding and integrating your NFT Drop contract address, you can efficiently launch your NFT collection.

The provided code serves as an embeddable solution for the NFT Drop contract. Should you prefer to personalize the template, the following instructions guide you through cloning the template project to cater to your specific requirements.
```bash
npx thirdweb create --template erc721
```
## Step-by-Step Guide

### 1. Deploy an NFT Drop on Thirdweb

Prior to deployment, ensure your NFT Drop contract is ready. Navigate to the Thirdweb dashboard to create your [NFT Drop Contract](https://thirdweb.com/thirdweb.eth/DropERC721). It is crucial to define a **name**, **description**, and **image** for your NFT drop, along with selecting an appropriate blockchain network. This example utilizes the **Polygon testnet Mumbai**. Acquire testnet funds by visiting the [Polygon testnet faucet](https://faucet.polygon.technology/), then proceed to create your NFT Drop.

Following the creation of your NFT drop, adjust the **Claim Conditions** in your contract to specify the release conditions for the NFTs.

### 2. Implement Gasless Transactions

Utilize [Biconomy](https://dashboard.biconomy.io/)) to establish gasless, sponsored transactions for your users. Connect your wallet, deposit your testnet funds, and retrieve the necessary URL and ID from the Biconomy Dashboard.

### 3. Application Embedding

Return to your thirdweb Dashboard:
1. Navigate to the Embed section.
2. Enable Biconomy by changing the Gasless selection from disabled.
3. Insert your Biconomy URL and ID.
4. Copy the provided `<iframe>` embed code.

### 4. Application Launch

Initiate a React application and deploy your application following these steps:

```sh
npx create-react-app my-app
cd my-app
npm start
```
- Remove all files in the `src` and `public` directories except for **index.html** and **index.js**.
- Embed the code from thirdweb into your `index.js` file.
- Proceed to deploy your application.

## Available Scripts

In the project directory, the following commands can be run:

- `npm start`: Launches the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
- `npm test`: Initiates the test runner in interactive watch mode.
- `npm run build`: Compiles the app for production to the `build` folder.
- `npm run eject`: Removes the single build dependency from your project, enabling full control over the configuration files and dependencies.

## Additional Information

Further details on React and application deployment can be found in the Create React App documentation and React official documentation.
"""
