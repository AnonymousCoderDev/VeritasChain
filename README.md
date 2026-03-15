<div align="center">

<br/>

<img src="frontend/public/favicon.svg" width="72" height="72" alt="VeritasChain Logo"/>

<br/>
<br/>

# VERITASCHAIN

### *Authenticate Reality. Preserve Truth.*

<p>A decentralized media integrity platform built on Ethereum + IPFS.<br/>
Stamp any file with a cryptographic fingerprint anchored forever on the blockchain.<br/>
Verify it. Prove it. Share the proof with anyone.</p>

<br/>

![Ethereum](https://img.shields.io/badge/Ethereum-Mainnet%20%2F%20Testnet-C9A84C?style=flat-square&logo=ethereum&logoColor=white&labelColor=1A1A1A&color=C9A84C)
![IPFS](https://img.shields.io/badge/Storage-IPFS-C9A84C?style=flat-square&logo=ipfs&logoColor=white&labelColor=1A1A1A&color=C9A84C)
![React](https://img.shields.io/badge/Frontend-React%2019-C9A84C?style=flat-square&logo=react&logoColor=white&labelColor=1A1A1A&color=C9A84C)
![FastAPI](https://img.shields.io/badge/Backend-FastAPI-C9A84C?style=flat-square&logo=fastapi&logoColor=white&labelColor=1A1A1A&color=C9A84C)
![Solidity](https://img.shields.io/badge/Contracts-Solidity-C9A84C?style=flat-square&logo=solidity&logoColor=white&labelColor=1A1A1A&color=C9A84C)
![License](https://img.shields.io/badge/License-MIT-C9A84C?style=flat-square&labelColor=1A1A1A&color=C9A84C)

<br/>

<video src="gifs/Demo.mp4" autoplay loop muted playsinline width="100%"></video>

<br/>

</div>

---

## What Is This?

In a world where reality is manufactured, the only currency worth having is **verifiable truth**.

VeritasChain lets you prove that a file — a photo, a document, a video, a dataset — existed at a specific moment in time, uploaded by a specific wallet, without trusting any centralized authority.

> The proof lives on the Ethereum blockchain. It cannot be altered, deleted, or disputed.

---

## Features

<table>
<tr>
<td width="50%">

**Stamp**<br/>
Upload any file. Its SHA-256 fingerprint is anchored on-chain via a smart contract. The file never leaves your device.

</td>
<td width="50%">

**Verify**<br/>
Paste an IPFS hash. Instantly know if it has a blockchain record — no account required.

</td>
</tr>
<tr>
<td width="50%">

**Prove**<br/>
Every record carries wallet address, timestamp, and transaction ID — an immutable chain of custody.

</td>
<td width="50%">

**API Access**<br/>
Generate an API key with your MetaMask wallet. Integrate tamper-proof stamping into any pipeline.

</td>
</tr>
<tr>
<td width="50%">

**No Accounts**<br/>
No sign-ups. No email. No passwords. Your wallet is your identity.

</td>
<td width="50%">

**No File Storage**<br/>
We never store your files. Only cryptographic fingerprints live on-chain.

</td>
</tr>
</table>

---

## How It Works

```
  You                     VeritasChain                  Ethereum
   │                           │                            │
   │── upload file ───────────▶│                            │
   │                           │── hash file (SHA-256)      │
   │                           │── pin to IPFS              │
   │                           │── send tx ────────────────▶│
   │                           │                   store hash + wallet + timestamp
   │◀── IPFS hash + tx ID ─────│                            │
   │                           │                            │
   │── verify(ipfsHash) ───────│── query contract ─────────▶│
   │◀── AUTHENTIC ─────────────│◀── on-chain record ────────│
```

1. File is **hashed locally** — nothing leaves your device unencrypted
2. File is **pinned to IPFS** — you get a content-addressed CID
3. Hash is **anchored on-chain** — immutable, timestamped, tied to your wallet
4. You receive a **certificate** — IPFS hash + transaction ID, shareable forever

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Blockchain | Ethereum · Solidity · Truffle · OpenZeppelin |
| Storage | IPFS (content-addressed, decentralized) |
| Backend | Python · FastAPI |
| Frontend | React 19 · MUI v7 · Framer Motion |
| Fonts | Playfair Display · Inter · JetBrains Mono |

---

## Project Structure

```
VeritasChain/
├── frontend/                   # React 19 app
│   ├── src/
│   │   ├── Components/         # Full pages (Upload, Verify, Docs, About, API Keys)
│   │   └── Micro-Components/   # Navbar, Footer, HeroSection, Logo
│   └── public/
│       └── favicon.svg         # Custom gold hexagon mark
│
├── backend/                    # FastAPI server
│   └── app/
│       ├── main.py
│       └── api/                # /files/upload · /files/verify · /files/all-hashes
│
└── contracts/                  # Solidity (Truffle + OpenZeppelin)
    └── contracts/
        └── UserFileStorage.sol
```

---

## Running Locally

### Prerequisites

- **Node.js** 18+
- **Python** 3.10+
- **MetaMask** browser extension
- **Ganache** (local Ethereum) or a testnet RPC URL

### 1 — Smart Contracts

```bash
cd contracts
npm install
npx truffle migrate --network development
# Note the deployed contract address — you'll need it for the backend .env
```

### 2 — Backend

```bash
cd backend
python -m venv venv

# macOS / Linux
source venv/bin/activate

# Windows
venv\Scripts\activate

pip install -r requirements.txt
cp .env.example .env         # fill in CONTRACT_ADDRESS and RPC_URL
uvicorn app.main:app --reload
# Runs at http://localhost:8000
```

### 3 — Frontend

```bash
cd frontend
npm install
cp .env.example .env         # fill in REACT_APP_API_URL and REACT_APP_IPFS_BASE_URL
npm start
# Runs at http://localhost:3000
```

### One-command start

```bash
./start_all.sh
```

---

## Environment Variables

**`frontend/.env`**
```env
REACT_APP_API_URL=http://localhost:8000
REACT_APP_API_BASE_URL=http://localhost:8000
REACT_APP_IPFS_BASE_URL=https://ipfs.io/ipfs/
```

**`backend/.env`**
```env
CONTRACT_ADDRESS=0x...your deployed contract address...
RPC_URL=http://127.0.0.1:7545
IPFS_API_URL=/dns/localhost/tcp/5001/http
```

---

## Philosophy

VeritasChain was built anonymously.

No names. No faces. No VC funding. No agenda. Just tools that work.

> *"In a world where reality is manufactured, the only currency worth having is verifiable truth."*

The belief is simple: **knowledge should be free, and the tools to verify it should be available to all.**

*Judge the code, not the coder.*

---

## License

MIT — do whatever you want with it.
