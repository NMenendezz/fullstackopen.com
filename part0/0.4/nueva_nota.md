```mermaid
sequenceDiagram

    browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
    server-->>browser: HTML
    browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server-->>browser: main.css
    browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
    server-->>browser: main.js

    note over browser: browser starts executing js code that requests JSON data from server

    browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server-->>browser: [{ content: "Hello, world!", date: "2023-06-15" }, ...]

    note over browser: browser executes the event handler that renders notes to display

    browser->>server: HTTP POST {note: 'The previous content.'}

    note over browser: browser reloads the page
```
