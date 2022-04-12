# Lyric Hunter

**Lyric Hunter** is a React app create to search for song lyrics with song's Artist and its title.

## How to start

Clone the project files into a local directory and run `npm i` to install project dependencies.
Afterwards run `npm start` to start the project on your localhost (normally on port 3000).


## What each file does

### public/

This directory holds the main Markup and manifest of the application.

### src/

This directory has all the JavaScript and CSS files necessary for the application.

Each file in this directory is as follows.

#### App.js

In this file the main structure of the React app is rendered.

#### App.css

This file contains all the styles for the Lyric Hunter application.

#### Components/

This directory holds all the components for the application which render the main UI of the application and the Lyric box where the song lyrics will be displayed.

##### Lyric.js

This JavaScript file renders the application where the user can type in the name of the Artist and the title of their song to search for lyrics.

##### LyricBox.js

Inside this file the Lyric box component is rendered, and if the lyric is fetched from the server this box will display said lyrics.

## Credits

This application uses [lyrics.ovh](https://github.com/NTag/lyrics.ovh) API created by [NTag](https://github.com/NTag)
