import React from 'react';
import Logo from './assets/logo.png';
import { Link } from 'react-router-dom';
import { FiBook } from 'react-icons/fi';
import { FaPencilAlt, FaRuler } from 'react-icons/fa';

export function SignInPrompt({greeting, onClick}) {
  return (
    <main>
      <div 
    className="py-20 px-8 flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-100 to-purple-200"
    >
      <img src={Logo} alt="logo" className="w-40 h-40 mb-6" />
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Hello, Welcome to <span className="text-purple-500">Edu.near</span>
      </h1>
      <div className="bg-white p-8 rounded-lg shadow-lg text-gray-800">
        <p className="mb-4">
        <FaPencilAlt className='text-red-600' />
          Welcome to our innovative tutorial platform! We've created a unique marketplace where content creators can share
          their expertise through video NFT tutorials. Here's how it works: creators upload their tutorials as NFTs, and
          anyone can purchase these NFTs to gain the right to distribute the course. When a tutorial is sold by a buyer, a
          percentage of the sale is paid as a royalty to the original owner.
        </p>
        <p className="mb-4">
        <FaRuler className='text-red-600' />
          But we didn't stop there! We've also incorporated NFT certificates, ensuring that your achievements are
          recognized and verified. After completing a course, you can download your personalized certificate as an NFT,
          adding a touch of exclusivity to your accomplishments.
        </p>
        <p className='mb-4'>
        <FiBook className='text-red-600' />
          Our platform combines the power of NFTs with the flexibility of a tutorial marketplace, allowing creators to
          monetize their content and buyers to explore, distribute, and sell these valuable tutorials. Join us today and
          become a part of this decentralized and innovative learning community!
        </p>
      </div>
      <button 
      onClick={onClick}
      className="mt-5 text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-2 text-center dark:focus:ring-blue-800 bg-gradient-to-r from-[#FB65FE] via-[#9010FF] to-[#FB65FE] hover:from-[#9010FF] hover:via-[#FB65FE] hover:to-[#9010FF]">
          Sign In
        </button>
    </div>
      {/* <h1>
        The contract says: <span className="greeting">{greeting}</span>
      </h1>
      <h3>
        Welcome to NEAR!
      </h3>
      <p>
        Your contract is storing a greeting message in the NEAR blockchain. To
        change it you need to sign in using the NEAR Wallet. It is very simple,
        just use the button below.
      </p>
      <p>
        Do not worry, this app runs in the test network ("testnet"). It works
        just like the main network ("mainnet"), but using NEAR Tokens that are
        only for testing!
      </p>
      <br/>
      <p style={{ textAlign: 'center' }}>
        <button onClick={onClick}>Sign in with NEAR Wallet</button>
      </p> */}
    </main>
  );
}

export function SignOutButton({accountId, onClick}) {
  return (
    <button style={{ float: 'right' }} onClick={onClick}>
      Sign out {accountId}
    </button>
  );
}

export function EducationalText() {
  return (
    <>
      <p>
        Look at that! A Hello World app! This greeting is stored on the NEAR blockchain. Check it out:
      </p>
      <ol>
        <li>
          Look in <code>frontend/App.js</code> - you'll see <code>getGreeting</code> and <code>setGreeting</code> being called on <code>contract</code>. What's this?
        </li>
        <li>
          Ultimately, this <code>contract</code> code is defined in <code>./contract</code> – this is the source code for your <a target="_blank" rel="noreferrer" href="https://docs.near.org/docs/develop/contracts/overview">smart contract</a>.</li>
        <li>
          When you run <code>npm run deploy</code>, the code in <code>./contract</code> gets deployed to the NEAR testnet. You can see how this happens by looking in <code>package.json</code>.</li>
      </ol>
      <hr />
      <p>
        To keep learning, check out <a target="_blank" rel="noreferrer" href="https://docs.near.org">the NEAR docs</a> or look through some <a target="_blank" rel="noreferrer" href="https://examples.near.org">example apps</a>.
      </p>
    </>
  );
}
