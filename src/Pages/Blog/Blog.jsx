import useTitle from "../../Hooks/useTitle";

/* eslint-disable react/no-unescaped-entities */
const Blog = () => {
  useTitle('Blog')
  return (
    <div className="p-2 md:w-[70%] mx-auto grid grid-cols-1 gap-3">
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h2>
          <h1 className="font-semibold">Access Token</h1>
          <p>
            An access token is a string of characters that is issued by an
            authorization server after successful authentication and
            authorization, and is used to access protected resources such as
            APIs or web services. It is sent with each subsequent request to the
            protected resource to prove that the user has been authenticated and
            authorized to access the resource.
          </p>

          <h1 className="font-semibold">Refresh Token</h1>
          <p>
            A refresh token is a longer-lived credential used to obtain a new
            access token when the current access token expires, without
            requiring the user to re-authenticate. It is typically used to
            obtain a new access token and sent with the request to the
            authorization server. This allows the application to obtain a new
            access token without requiring the user to log in again.
          </p>
          <h1 className="font-semibold">Working</h1>
          <p>
            Access tokens and refresh tokens work together to provide secure
            access to protected resources. The access token is used to access
            the protected resource, while the refresh token is used to obtain a
            new access token when the current access token expires.
          </p>
          <h1 className="font-semibold">Storing</h1>
          <p>
            Access tokens and refresh tokens should be stored securely on the
            client-side to prevent unauthorized access. One common approach is
            to store them in an HTTP-only cookie, which can only be accessed by
            the server. Another approach is to store them in local storage or
            session storage, but this can be less secure as it is vulnerable to
            XSS attacks. The storage location and security of access tokens and
            refresh tokens can vary depending on the application's requirements
            and security risks. It's important to follow security best practices
            and consult with security experts to ensure they are stored
            securely.
          </p>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Compare SQL and NoSQL databases?</h2>
          <p>
            SQL databases use a relational data model, have a rigid schema, are
            vertically scalable, use SQL for querying, are typically ACID
            compliant, and are best suited for applications that require complex
            queries and transactions. NoSQL databases use a non-relational data
            model, have a flexible schema, are horizontally scalable, use
            different query languages, may or may not be ACID compliant, and are
            best suited for applications that require high scalability and
            flexibility.
          </p>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">What is express js? What is Nest JS?</h2>
          <h1 className="font-semibold">Express Js</h1>
          <p>
            Express.js is a popular web application framework for Node.js that
            allows developers to build web applications and APIs quickly and
            easily. It provides a simple and flexible routing system, middleware
            support, and a wide range of plugins and extensions that can be used
            to add additional functionality to the application.
          </p>
          <h1 className="font-semibold">Next Js</h1>
          <p>
            NestJS is a Node.js framework built on top of Express.js that
            provides a modular architecture for building scalable server-side
            applications. It offers a powerful dependency injection system, a
            built-in testing framework, and a range of plugins and extensions.
            NestJS is designed to be highly modular and scalable, with a focus
            on developer experience and ease of use.
          </p>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            What is MongoDB aggregate and how does it work ?
          </h2>
          <p>
            MongoDB's aggregate function is a tool that allows you to perform
            complex data analysis and manipulation on collections of documents.
            It works by processing data in stages, allowing you to filter,
            group, and transform data in a variety of ways. This helps to
            improve performance and reduce resource usage, making it a powerful
            tool for developers and data analysts working with large volumes of
            data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
