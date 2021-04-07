## Enter the URL https://www.websequencediagrams.com/

### Single Page Application

**0.5: Single page app**

Create a diagram depicting the situation where the user goes to the single page app version of the notes app at https://studies.cs.helsinki.fi/exampleapp/spa.

```
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
server-->browser: Status Code: 200 content-type: text/html HTML CODE
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: Status Code: 200 content-type: text/css file: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
server-->browser: Status Code: 200 content-type: application/javascript file: spa.js

note over browser:
browser starts executing js-code
that requests JSON data from server
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: Status Code: 200 content-type: application/json file:data.json

note over browser:
browser executes the event handler
that renders notes to display
end note
```
