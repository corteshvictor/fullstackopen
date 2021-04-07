## Enter the URL https://www.websequencediagrams.com/

### Single Page Application

**0.6: New note**

Create a diagram depicting the situation where the user creates a new note using the single page version of the app.

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

note over browser:
the browser uses the previously
downloaded JavaScript code.
creates a new note, adds it to the note
list with notes.push(note) and
re-render the note list on the page.
end note

browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
server-->browser: Status Code: 201 content-type: application/json response: {"message":"note created"}
```

![0.6: New note](https://github.com/corteshvictor/fullstackopen/blob/main/part0/06_spa_new_note.png)
