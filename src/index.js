import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { createSmartAccountClient } from '@biconomy/account';

const container = document.getElementById('root');

if (container !== null) {
  const root = createRoot(container);

  // Example component that initializes Biconomy
  const BiconomyIntegration = () => {
    useEffect(() => {
      const initBiconomy = async () => {
        try {
          const biconomySmartAccount = await createSmartAccountClient({
            chainId: 137, // Polygon Mainnet Chain ID
            // The URLs and keys need to be updated with your actual data
            biconomyPaymasterApiKey: 'gDuSrJQxD.f3f04dda-e475-41c4-81cf-1e590ba19db4',
          });

          // Now, you can use biconomySmartAccount for your transactions...
        } catch (error) {
          console.error('Biconomy Smart Account setup failed:', error);
        }
      };

      initBiconomy();
    }, []);

    return (
      <iframe
      src="https://embed.ipfscdn.io/ipfs/bafybeicd3qfzelz4su7ng6n523virdsgobrc5pcbarhwqv3dj3drh645pi/?contract=0x580b1614ae39534bA69D9cB9B161Ff147a493cD2&chain=%7B%22name%22%3A%22Polygon+Mainnet%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2F137.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22matic%22%2C%22chainId%22%3A137%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22polygon%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fpolygon%2F512.png%22%2C%22width%22%3A512%2C%22height%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=0ada1b702c0025528b42c4cb039358ad&theme=light&primaryColor=purple"
      style={{ width: '99vw', height: '99vh' }}
        frameBorder="0"
      ></iframe>
    );
  };

  root.render(
    <React.StrictMode>
      <BiconomyIntegration />
    </React.StrictMode>,
  );
} else {
  console.error('Failed to find root element');
}

