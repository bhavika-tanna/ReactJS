# ***Theory Q&A***

# ***1. What is Emmet?***

*Ans: Credits- Sergey Chikuyonok, Emmet is a plugin for many popular text editors which greatly improves HTML and CSS workflow. It allows you to type shortcuts that are then expanded into full pieces of code for writing HTML and CSS, based on an abbreviation structure.*

**Emmet cheatsheet : https://docs.emmet.io/cheat-sheet/**

# ***2. Difference between a Library and Framework?***

*Ans: A library is a collection of functions or classes that you can use to perform specific tasks in your code. A library does not dictate the structure or organization of your code; you are free to use the library in any way you see fit.*
*A framework, on the other hand, is a set of conventions and tools for building a web application. A framework provides a set of guidelines or rules for how your code should be organized and structured, and it often includes libraries and tools to help you build your application. When you use a framework, you are expected to structure your code in a certain way and to follow the conventions of the framework.*

*Few key differences between libraries and frameworks:*

*Control: With a library, you have more control over your code because you are free to use the library in any way you see fit. With a framework, you have less control because you are required to follow the conventions and structure of the framework.*

*Inversion of control: In a library, you are in control of your code and you call the library functions when you need them. In a framework, the control is inverted: the framework calls your code in response to certain events or triggers.*

*Flexibility: Libraries are generally more flexible than frameworks because they give you more control over your code and do not dictate how it should be structured. Frameworks can be less flexible because they require you to follow certain conventions and structures.*

*Coupling: Libraries are generally less coupled to your code than frameworks. This means that you can use a library in a wider range of applications and it is easier to change or remove a library from your code. Frameworks are more coupled to your code because they often require you to structure your code in a certain way and to follow certain conventions.*

*In general, libraries are more focused on providing specific functionality that you can use in your code, while frameworks provide a structure and set of conventions for building an entire application. The choice between using a library or a framework will depend on your specific needs and the requirements of your project.*

# ***3. What is CDN? Why do we use it?***

*Ans. A CDN (Content Delivery Network) is a network of servers that are used to deliver web content to users based on their geographic location. CDNs are designed to improve the performance of a website by reducing the distance that the content has to travel, and by reducing the load on the origin server. CDNs work by storing copies of static content (such as images, JavaScript files, and stylesheets) on servers that are located in multiple locations around the world. When a user requests content from a website, the CDN will redirect the request to the server that is nearest to the user, which helps to reduce the time it takes for the content to be delivered. CDNs are commonly used to deliver content for websites, as well as for streaming media and other types of content. Some popular CDN providers include Cloudflare, Akamai, and Fastly.*
*There are several reasons why CDNs are used: Performance, Scalability, Availability, Security, Geographic distribution.*

# ***4. Why is React known as React?***

*Ans: React is known as React because it was designed to be reactive. This means that it was designed to efficiently update and render components when the data that it depends on changes. In React, a component's state is the data that it uses to render itself. When the state of a component changes, the component will re-render itself to reflect the new state. This makes it easy to build interactive, dynamic user interfaces. React's ability to efficiently update and render components when the data changes is what makes it so popular for building modern, interactive web applications. It allows developers to build complex, real-time applications that can handle large amounts of data and update smoothly as the data changes. The name "React" is also a short, simple, and easy-to-remember name, which has likely contributed to its popularity.*

# ***5. What is crossorigin in script tag?***
*Ans: The crossorigin attribute is an HTML attribute that is used to specify the CORS (Cross-Origin Resource Sharing) policy for a web page or resource. It is used to indicate whether or not a web page or resource should be allowed to be loaded from a different origin (a different domain, protocol, or port) than the one that served it.*

*Syntax:* 
><script src="https://other-domain.com/script.js" crossorigin="anonymous"></script>

# ***6.What is diference between React and ReactDOM?***
*Ans: React and ReactDOM are two separate libraries that are developed by Facebook. React is a JavaScript library for building user interfaces. It provides a declarative, efficient, and flexible way to build UI components and manage the state of your application. ReactDOM is a library that provides a way to render React components to the DOM (Document Object Model). It provides methods for rendering React components to the DOM and for unmounting components from the DOM.*

# ***7. What is difference between react.development.js and react.production.js files via CDN?***
*Ans: The main difference between these two files is the level of debugging information that they contain. The 'react.development.js' file is a version of React that is optimized for development and includes additional debugging information, such as error messages and warning messages. The 'react.production.js' file is a version of React that is optimized for production and does not include the extra debugging information.*

