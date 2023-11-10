# Questions 

## React and Next.js:

### Describe a situation where you would use Next.js instead of Create React App. Why?

In a scenario where server-side rendering (SSR) or search engine optimization (SEO) is a priority, I would opt for Next.js over Create React App. Next.js offers built-in support for SSR, enabling faster initial page loads and better SEO by delivering pre-rendered content to search engines. Additionally, Next.js provides a convenient file-based routing system and API routes, simplifying the development of complex applications. This choice is particularly beneficial for projects with dynamic content, enhanced performance requirements, or a need for improved SEO capabilities.

### How do you handle SEO in a Next.js application?

In a Next.js application, effective SEO involves strategically placing meta tags using the metadata in layout.tsx. Additionally, incorporating a sitemap.xml file, a robots.txt file, and canonical URLs aids search engines in crawling and indexing. Overall, prioritizing performance optimization and adhering to SEO best practices contribute to better search engine visibility.

### Can you explain what React Server Components are and how they differ from traditional React Components?

React Server Components are a new React feature designed for server-side rendering (SSR) by default. They enable granular updates and dynamic loading on the server, improving performance and scalability compared to traditional client-rendered React Components.

## Tailwind CSS:

### How would you extend the default configuration of Tailwind in a project? Give an example.

To extend the default configuration of Tailwind CSS in a project, you can use the extend key in your tailwind.config.js file. Here's a simple example:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Add custom colors or extend existing ones
        primary: '#3498db',
        secondary: '#2ecc71',
      },
      fontFamily: {
        // Add custom fonts or extend existing ones
        custom: ['CustomFont', 'sans'],
      },
      // Add any other customizations here
    },
  },
  // Other Tailwind CSS configurations...
};
```

### Describe a situation where utility-first CSS might not be the best approach. How would you handle it?

Utility-first CSS may not be the best approach in situations involving complex design requirements, the need for consistent theming across components, or global theming. In these cases, a more structured and component-based CSS approach, possibly utilizing preprocessors or CSS-in-JS, is recommended for better organization and maintainability.

## React Concepts:

### Explain the difference between a controlled and an uncontrolled component in React.

In React, a controlled component is one whose state is controlled by React, while an uncontrolled component maintains its own internal state. Controlled components receive their data via props and handle changes through callbacks, providing more centralized control. Uncontrolled components manage their own state internally, often using refs, and don't rely on React to manage their data flow.

### How would you handle global state in a React application without using any external libraries?

To manage global state in a React application without external libraries, you can use the Context API for state propagation and set up a context provider to wrap components needing access to the global state. This allows you to share state across the entire component tree without resorting to additional libraries.

### Describe the main differences between class components and functional components in React.

Class components are ES6 classes that extend React.Component and have access to state and lifecycle methods, while functional components are simpler, function-based components introduced in React 16.8. With the advent of Hooks, functional components can now manage state and lifecycle features, making them more concise and promoting better code reuse compared to class components.

## Typescript in React:

### How do you define prop types in a React component using TypeScript?

In TypeScript, to define prop types for a React component, you create an interface detailing the expected prop names and their types. Later, you pass this interface to the props parameter of the functional component, ensuring proper typing and clear definition of expected properties.

### Describe a scenario where using TypeScript with React improved the quality of your code.

When implementing a complex form in a React application, TypeScript improved code quality by ensuring type safety for form data. The compiler caught potential errors in form submissions, such as mismatched data types or missing required fields, leading to more robust and reliable code.

## Web3 & Starknet:

### Explain the main differences between Web2 and Web3 from a front-end perspective.

Web2 front-end development is centered on traditional client-server architecture, using centralized databases. In contrast, Web3 involves integrating with blockchain networks, interacting with smart contracts, and incorporating decentralized identity solutions, requiring a broader skill set for front-end developers.

### How would you handle wallet connections in a Web3 application?

In a Web3 application, handle wallet connections by integrating with a Web3 provider like MetaMask. Utilize the provider's JavaScript library (e.g., Web3.js or Ethers.js) to interact with the user's wallet, manage transactions, and access blockchain data securely.

### Have you worked with Starknet or any other L2/L3 solutions before? Describe your experience.

Yes, I have experience working with Starknet. Specifically, in the Ekubo Protocol, an AMM on Starknet, I assisted in displaying the Starknet ID in the wallet modal. This involved utilizing appropriate libraries to enhance the user experience within the Ekubo Protocol.

## How would you implement real-time data fetching in a React application?

Implement real-time data fetching in a React application using WebSocket for bidirectional communication or a library like Socket.io. Establish a connection to the server, subscribe to real-time events, and update the UI dynamically based on incoming data.

## Describe a custom React hook you've written and its use case.

I've written a custom React hook called useLocalStorage. It facilitates seamless interaction with the browser's local storage, allowing components to easily read, write, and synchronize state with local storage. This hook is useful for persisting small amounts of data, such as user preferences or authentication tokens, across page reloads.

# Test Documentation

live project : https://front-end-web3-test.vercel.app/

## Adding Environment Variable

### Step 1: Create a `.env` file

In order to set up the required environment variable, follow these steps:

- Navigate to the root of your project.

- Create a new file and name it `.env`. This file will store your environment variables.

### Step 2: Add `NEXT_PUBLIC_API_KEY` to `.env`

Open the `.env` file you just created and add the following line:

```plaintext
NEXT_PUBLIC_API_KEY=your_api_key_value
```

Replace your_api_key_value with the actual API key you want to use.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
