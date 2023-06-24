import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "../src/polyfills";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "../src/utils/theme";
import {
  connectorsForWallets,
  wallet,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains(
  [
    chain.polygonMumbai,
  ],
  [
  
    jsonRpcProvider({
      rpc: () => {
        return {
          http: "https://rpc.ankr.com/polygon_mumbai",
        };
      },
    }),
    publicProvider(),
   
  ]
);

const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      wallet.metaMask({ chains, shimDisconnect: true }),
      wallet.walletConnect({ chains }),
      wallet.coinbase({ appName: "CrowdFunding Platform", chains }),
      wallet.rainbow({ chains }),
    ],
  },
  {
    groupName: "Others",
    wallets: [
      wallet.argent({ chains }),
      wallet.brave({
        chains,
        shimDisconnect: true,
      }),
      wallet.imToken({ chains }),
      wallet.injected({
        chains,
        shimDisconnect: true,
      }),
      wallet.ledger({
        chains,
        
      }),
      wallet.steak({ chains }),
      wallet.trust({ chains, shimDisconnect: true }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        showRecentTransactions={true}
        chains={chains}
        coolMode
      >
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <App />
      </Router>
    </ThemeProvider>
    </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
