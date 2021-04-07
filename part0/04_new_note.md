## Enter the URL https://www.websequencediagrams.com/

### Traditional web applications

**0.4: new note**

In chapter Loading a page containing JavaScript - review the chain of events caused by opening the page https://studies.cs.helsinki.fi/exampleapp/notes is depicted as a sequence diagram

Create a similar diagram depicting the situation where the user creates a new note on page https://studies.cs.helsinki.fi/exampleapp/notes by writing something into the text field and clicking the submit button.

```
note over browser:
The user enters information
in the text field.

<input type="text" name="note">
end note

note over browser:
The user clicks on the save button.

<input type="submit" value="Save">
end note


browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note

note over server:
Resource is available at another location
server requests the browser to make a new
HTTP GET request to the Location
end note

server-->browser: HTTP 302 Found Location /exampleapp/notes

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
server-->browser: Status Code: 200 content-type: text/HTML
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: Status Code: 200 content-type: text/css file: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
server-->browser: Status Code: 200 content-type: application/javascript file: main.js

note over browser:
browser starts executing js-code
that requests JSON data from server
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: Status Code: 200 content-type: application/json file: data.json
browser->server: HTTP GET https://studies.cs.helsinki.fi/favicon.ico
server-->browser:Status Code: 200 content-type: text/html file: favicon.ico

note over browser:
browser executes the event handler
that renders notes to display
end note
```

![0.4: new note](https://github.com/corteshvictor/fullstackopen/blob/main/part0/04_new_note.png)
