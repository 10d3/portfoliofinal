import { Code } from "@chakra-ui/react";

export const projects = [
  {
    id: 0,
    title: "Props Drilling in React",
    img: "https://www.copycat.dev/blog/wp-content/uploads/2023/03/react_usecontext.png",
    description: "Don't Let Your Components Drown in Data Debt.",
    p1: (
      <>
        <strong>Imagine this</strong>: you're building a React app, everything's
        going smoothly, components are reusable, code is clean. Then, the
        dreaded data sharing issue pops up. You need user information, say the
        theme preference, to trickle down from the mighty App component to a
        tiny button component buried deep within the UI. Boom! You start passing
        data down, prop by prop, like a bucket brigade battling a data-fueled
        fire. This, my friends, is <strong>prop drilling</strong>, and it's a
        recipe for <strong>component hell</strong>.
      </>
    ),
    fH1: (
      <>
        <strong>Why is prop drilling bad? </strong>
      </>
    ),
    reas: [
      <>
        <strong>Spaghetti code</strong>: As your app grows, props become
        entangled, creating a complex and hard-to-debug mess.
      </>,
      <>
        <strong>Maintenance nightmare</strong>: Adding new features or modifying
        existing ones becomes a game of prop Jenga, where one wrong move can
        topple the entire structure.
      </>,
      <>
        <strong>Component reusability suffers</strong>: Components become
        tightly coupled to specific data, limiting their reusability in other
        parts of your app.
      </>,
    ],
    fh2: (
      <>
        <strong>Enter the hero: useContext</strong>
      </>
    ),
    des1: "React's useContext hook offers a lifeline, allowing components to access shared data without explicit prop drilling. Think of it as a magical backpack accessible to anyone, regardless of their position in the component hierarchy.",
    fh3: "How does it work?",
    reas1: [
      <>
        <strong>Create a context</strong>: Define a context object using
        React.createContext(). This object will hold your shared data.
      </>,
      <>
        <strong>Wrap components</strong>: Wrap the components that need access
        to the data in a Provider component. This component provides the context
        value to its children.
      </>,
      <>
        <strong>Access the data</strong>: Inside any child component, use the
        useContext hook to access the context object and its data.
      </>,
    ],
    fh4: (
      <>
        <strong>Example: Theming with useContext</strong>
      </>
    ),
    des2: "Let's say you want to share a theme preference (light or dark) throughout your app. Here's how you can do it with useContext:",
    code: (
      <>
        <li>
          <strong>Step 1: Create a context</strong>
          <pre>
            <Code>{`
const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
});`}</Code>
          </pre>
        </li>
        <li>
          <strong>Step 2: Wrap components</strong>
          <pre>
            <Code w="100%">{`function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? '🌑' : '☀️');
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme }}
    >
      {/* Your app components here */}
    </ThemeContext.Provider>
  );
}`}</Code>
          </pre>
        </li>
        <li>
          <strong>Step 3: Access the data</strong>
          <pre>
            <Code>
              {`function Button() {
  const { theme, toggleTheme } =
    useContext(ThemeContext);

  return (
    <button
      style={{ backgroundColor: theme }}
    >
      {theme} Mode | <button
        onClick={toggleTheme}
      >
        Toggle
      </button>
    </button>
  );
}`}
            </Code>
          </pre>
        </li>
      </>
    ),
    des3: "Now, any component within the App component can access the theme and toggle function without needing to pass them down explicitly. No more prop drilling!",
    conclusion: (
      <>
        <br />
        <strong>Conclusion</strong>:<br /> useContext is a powerful tool for
        managing shared data in your React app. It helps you avoid prop drilling
        and creates a more maintainable and reusable component structure. So,
        next time you find yourself in a data-sharing pickle, remember:
        useContext is your friend!
      </>
    ),
    coffee: (
      <a href="https://www.buymeacoffee.com/10d3">
        <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=10d3&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" />
      </a>
    ),
  },
  {
    id: 1,
    title: "Unveiling the Power of useParams",
    img: "https://cdn.hashnode.com/res/hashnode/image/upload/v1665807463447/9kVSm1ZOG.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    description: "A Guide to Managing URL Parameters.",
    p1: (
      <>
        In the <strong>realm of React development</strong>, crafting dynamic and
        engaging user experiences often hinges on the ability to effectively
        manage URL parameters. These parameters, also referred to as dynamic
        segments, empower you to capture user input or data directly from the
        URL and integrate it seamlessly within your components. This is where
        the <strong>useParams</strong> hook, a cornerstone of the{" "}
        <strong>react-router-dom</strong> library, emerges as an invaluable
        tool.
      </>
    ),
    // fH1: "Delving into useParams: Understanding Its Essence",
    // reas: [
    //   <>
    //     <strong>Spaghetti code</strong>: As your app grows, props become
    //     entangled, creating a complex and hard-to-debug mess.
    //   </>,
    //   <>
    //     <strong>Maintenance nightmare</strong>: Adding new features or modifying
    //     existing ones becomes a game of prop Jenga, where one wrong move can
    //     topple the entire structure.
    //   </>,
    //   <>
    //     <strong>Component reusability suffers</strong>: Components become
    //     tightly coupled to specific data, limiting their reusability in other
    //     parts of your app.
    //   </>,
    // ],
    fh2: (
      <>
        <strong>Delving into useParams: Understanding Its Essence</strong>
      </>
    ),
    des1: (
      <>
        The <strong>useParams</strong> hook serves as a functional component
        hook, granting you direct access to the dynamic parameters embedded
        within the current URL path. It functions by meticulously extracting the
        values defined within the route configuration and returning them as a
        structured object. This object acts as a repository for key-value pairs,
        where the keys represent the parameter names specified in your routes,
        and the corresponding values encapsulate the user-provided data captured
        from the URL.
      </>
    ),
    // fh3: (
    //   <>
    //     <strong>
    //       Leveraging useParams in Practice: Unleashing Its Potential
    //     </strong>
    //   </>
    // ),
    // reas1: [
    //   <>
    //     <strong>Crafting Dynamic Routes</strong>: Begin by establishing your
    //     routes using the <Code>{`<Route>`}</Code> component from{" "}
    //     <Code>{`react-router-dom`}</Code> Within the <Code>{`path`}</Code> prop,
    //     strategically incorporate colons <Code>{`:`}</Code> to designate dynamic
    //     segments. For instance, consider a route designed to showcase product
    //     details:
    //   </>,
    //   <>
    //     <strong>Wrap components</strong>: Wrap the components that need access
    //     to the data in a Provider component. This component provides the context
    //     value to its children.
    //   </>,
    //   <>
    //     <strong>Access the data</strong>: Inside any child component, use the
    //     useContext hook to access the context object and its data.
    //   </>,
    // ],
    fh4: (
      <>
        <strong>
          Leveraging useParams in Practice: Unleashing Its Potential
        </strong>
      </>
    ),
    des2: (
      <>
        To harness the power of the useParams hook, ensure you have the
        react-router-dom library installed within your project. Once that's in
        place, here's a meticulously crafted guide to its implementation:
        <br />
      </>
    ),
    code: (
      <>
        <br />
        <li>
          <strong>Crafting Dynamic Routes</strong>: Begin by establishing your
          routes using the <Code>{`<Route>`}</Code> component from{" "}
          <Code>{`react-router-dom`}</Code> Within the <Code>{`path`}</Code>{" "}
          prop, strategically incorporate colons <Code>{`:`}</Code> to designate
          dynamic segments. For instance, consider a route designed to showcase
          product details:
          <br />
          <pre>
            <Code>
              {`
<Route
  path="/products/:productId"
  component={ProductDetails}
/>
              `}
            </Code>
          </pre>
          <br />
          <>
            In this example, <Code>:productId</Code> acts as the dynamic
            segment, meticulously capturing the specific product ID from the
            URL.
          </>
        </li>
        <br />
        <li>
          <strong>Wrap components</strong>: Wrap the components that need access
          to the data in a Provider component. This component provides the
          context value to its children.
          <br />
          <pre>
            <Code w="100%">{`import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { productId } = useParams();

  // Utilize the productId here to fetch
  // product details or display relevant content
}`}</Code>
          </pre>
          <br />
          <>
            Here, the useParams hook meticulously extracts the productId from
            the URL and assigns it to a variable of the same name within the
            component.
          </>
        </li>
        <br />
        <li>
          <>
            <strong>Harnessing the Extracted Data</strong> With the extracted
            parameter secured, you can now leverage it to your advantage in a
            multitude of ways:
          </>
          <ol>
            <li>
              <strong>Dynamic Data Fetching</strong>: Employ the parameter value
              to make API calls, meticulously retrieving specific information
              tailored to the user's input.
            </li>
            <li>
              <strong>Personalized Content Rendering</strong>: Dynamically
              render content or components that are specifically tailored to the
              captured parameter, fostering a more interactive user experience.
            </li>
            <li>
              <strong>Programmatic Navigation</strong>: Utilize the parameter
              data to programmatically navigate the user to distinct sections of
              your application based on their selections, enhancing user
              experience flow.
            </li>
          </ol>
        </li>
      </>
    ),
    des3: "Now, any component within the App component can access the theme and toggle function without needing to pass them down explicitly. No more prop drilling!",
    conclusion: (
      <>
        <br />
        <strong>Conclusion: Empowering Dynamic React Applications</strong>:
        <br /> The <Code>{`useParams`}</Code> hook bestows upon you the ability to construct
        dynamic and engaging React applications by providing a robust mechanism
        for managing URL parameters. By comprehending its functionality and
        strategically incorporating it into your development workflow, you
        unlock a plethora of possibilities for crafting user-centric and
        interactive experiences. Remember, this serves as a foundational
        understanding. As you embark on your development journey, delve deeper
        into the intricacies of <Code>{`useParams`}</Code> and uncover its true potential in
        building robust and dynamic React applications.
      </>
    ),
    coffee: (
      <a href="https://www.buymeacoffee.com/10d3">
        <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=10d3&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" />
      </a>
    ),
  },
  {
    id: 2,
    title: "Props Drilling in React",
    img: "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    description: "Don't Let Your Components Drown in Data Debt.",
    p1: (
      <>
        <strong>Imagine this</strong>: you're building a React app, everything's
        going smoothly, components are reusable, code is clean. Then, the
        dreaded data sharing issue pops up. You need user information, say the
        theme preference, to trickle down from the mighty App component to a
        tiny button component buried deep within the UI. Boom! You start passing
        data down, prop by prop, like a bucket brigade battling a data-fueled
        fire. This, my friends, is <strong>prop drilling</strong>, and it's a
        recipe for <strong>component hell</strong>.
      </>
    ),
    fH1: "Why is prop drilling bad?",
    reas: [
      <>
        <strong>Spaghetti code</strong>: As your app grows, props become
        entangled, creating a complex and hard-to-debug mess.
      </>,
      <>
        <strong>Maintenance nightmare</strong>: Adding new features or modifying
        existing ones becomes a game of prop Jenga, where one wrong move can
        topple the entire structure.
      </>,
      <>
        <strong>Component reusability suffers</strong>: Components become
        tightly coupled to specific data, limiting their reusability in other
        parts of your app.
      </>,
    ],
    fh2: (
      <>
        <strong>Enter the hero: useContext</strong>
      </>
    ),
    des1: "React's useContext hook offers a lifeline, allowing components to access shared data without explicit prop drilling. Think of it as a magical backpack accessible to anyone, regardless of their position in the component hierarchy.",
    fh3: "How does it work?",
    reas1: [
      <>
        <strong>Create a context</strong>: Define a context object using
        React.createContext(). This object will hold your shared data.
      </>,
      <>
        <strong>Wrap components</strong>: Wrap the components that need access
        to the data in a Provider component. This component provides the context
        value to its children.
      </>,
      <>
        <strong>Access the data</strong>: Inside any child component, use the
        useContext hook to access the context object and its data.
      </>,
    ],
    fh4: (
      <>
        <strong>Example: Theming with useContext</strong>
      </>
    ),
    des2: "Let's say you want to share a theme preference (light or dark) throughout your app. Here's how you can do it with useContext:",
    code: (
      <>
        <li>
          <strong>Step 1: Create a context</strong>
          <pre>
            <Code>{`
const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
});`}</Code>
          </pre>
        </li>
        <li>
          <strong>Step 2: Wrap components</strong>
          <pre>
            <Code w="100%">{`function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? '🌑' : '☀️');
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme }}
    >
      {/* Your app components here */}
    </ThemeContext.Provider>
  );
}`}</Code>
          </pre>
        </li>
        <li>
          <strong>Step 3: Access the data</strong>
          <pre>
            <Code>
              {`function Button() {
  const { theme, toggleTheme } =
    useContext(ThemeContext);

  return (
    <button
      style={{ backgroundColor: theme }}
    >
      {theme} Mode | <button
        onClick={toggleTheme}
      >
        Toggle
      </button>
    </button>
  );
}`}
            </Code>
          </pre>
        </li>
      </>
    ),
    des3: "Now, any component within the App component can access the theme and toggle function without needing to pass them down explicitly. No more prop drilling!",
    conclusion: (
      <>
        <br />
        <strong>Conclusion</strong>:<br /> useContext is a powerful tool for
        managing shared data in your React app. It helps you avoid prop drilling
        and creates a more maintainable and reusable component structure. So,
        next time you find yourself in a data-sharing pickle, remember:
        useContext is your friend!
      </>
    ),
    coffee: (
      <a href="https://www.buymeacoffee.com/10d3">
        <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=10d3&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" />
      </a>
    ),
  },
  {
    id: 3,
    title: "Props Drilling in React",
    img: "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    description: "Don't Let Your Components Drown in Data Debt.",
    p1: (
      <>
        <strong>Imagine this</strong>: you're building a React app, everything's
        going smoothly, components are reusable, code is clean. Then, the
        dreaded data sharing issue pops up. You need user information, say the
        theme preference, to trickle down from the mighty App component to a
        tiny button component buried deep within the UI. Boom! You start passing
        data down, prop by prop, like a bucket brigade battling a data-fueled
        fire. This, my friends, is <strong>prop drilling</strong>, and it's a
        recipe for <strong>component hell</strong>.
      </>
    ),
    fH1: "Why is prop drilling bad?",
    reas: [
      <>
        <strong>Spaghetti code</strong>: As your app grows, props become
        entangled, creating a complex and hard-to-debug mess.
      </>,
      <>
        <strong>Maintenance nightmare</strong>: Adding new features or modifying
        existing ones becomes a game of prop Jenga, where one wrong move can
        topple the entire structure.
      </>,
      <>
        <strong>Component reusability suffers</strong>: Components become
        tightly coupled to specific data, limiting their reusability in other
        parts of your app.
      </>,
    ],
    fh2: (
      <>
        <strong>Enter the hero: useContext</strong>
      </>
    ),
    des1: "React's useContext hook offers a lifeline, allowing components to access shared data without explicit prop drilling. Think of it as a magical backpack accessible to anyone, regardless of their position in the component hierarchy.",
    fh3: "How does it work?",
    reas1: [
      <>
        <strong>Create a context</strong>: Define a context object using
        React.createContext(). This object will hold your shared data.
      </>,
      <>
        <strong>Wrap components</strong>: Wrap the components that need access
        to the data in a Provider component. This component provides the context
        value to its children.
      </>,
      <>
        <strong>Access the data</strong>: Inside any child component, use the
        useContext hook to access the context object and its data.
      </>,
    ],
    fh4: (
      <>
        <strong>Example: Theming with useContext</strong>
      </>
    ),
    des2: "Let's say you want to share a theme preference (light or dark) throughout your app. Here's how you can do it with useContext:",
    code: (
      <>
        <li>
          <strong>Step 1: Create a context</strong>
          <pre>
            <Code>{`
const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
});`}</Code>
          </pre>
        </li>
        <li>
          <strong>Step 2: Wrap components</strong>
          <pre>
            <Code w="100%">{`function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? '🌑' : '☀️');
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme }}
    >
      {/* Your app components here */}
    </ThemeContext.Provider>
  );
}`}</Code>
          </pre>
        </li>
        <li>
          <strong>Step 3: Access the data</strong>
          <pre>
            <Code>
              {`function Button() {
  const { theme, toggleTheme } =
    useContext(ThemeContext);

  return (
    <button
      style={{ backgroundColor: theme }}
    >
      {theme} Mode | <button
        onClick={toggleTheme}
      >
        Toggle
      </button>
    </button>
  );
}`}
            </Code>
          </pre>
        </li>
      </>
    ),
    des3: "Now, any component within the App component can access the theme and toggle function without needing to pass them down explicitly. No more prop drilling!",
    conclusion: (
      <>
        <br />
        <strong>Conclusion</strong>:<br /> useContext is a powerful tool for
        managing shared data in your React app. It helps you avoid prop drilling
        and creates a more maintainable and reusable component structure. So,
        next time you find yourself in a data-sharing pickle, remember:
        useContext is your friend!
      </>
    ),
    coffee: (
      <a href="https://www.buymeacoffee.com/10d3">
        <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=10d3&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" />
      </a>
    ),
  },
];
