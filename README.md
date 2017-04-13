# jordgubbe
:strawberry: A landing page where you can list all the apps and services stored in different places and access them from a single page.

<img src="http://i.imgur.com/Rz3onJW.png" align="right" />


## Introduction
So the main idea for this landing page was to have all my usual links plus the services stored on different servers/vms, like Deluge, CouchPotato, Sonarr and many more.

I came up with this when I was looking for a landing page, there were good ones but I wanted to make something fresh and either material design o metro design, ended up picking metro because, well, it looks cool.

Also I used [simpleWeather](http://simpleweatherjs.com/) and added some weather information on the header.

## What's next?
My plans for the upcomings days is to build a backend in NodeJS that will allow the user to add links/services from the landing page itself.

I am open to suggestions and critics.

## Where are the links stored?
Everything regarding the links are stored in a .json file, there for now, you can add the links with its title and colour.

This is ithe scheme of the json file:

```json
{  
   "name": "Sonarr",
   "link": "https://sonarr.tv/",
   "colour": "cyan"
}
```
Name -> is the title that is shown in the page.<br>
Link -> URL to the link/service/app.<br>
Colour -> Background colour of service, to see the available colours go to [css/colors.css](https://github.com/emimontesdeoca/jordgubbe/blob/master/css/colors.css).

## What about the weather?

Everything is pretty easy to modify, in the [js/app.js](https://github.com/emimontesdeoca/jordgubbe/blob/master/js/app.js) file you can see how the simplyWeather is, if you just want to change the location, change the loadWeather function call:

```javascript
{  
   $(document).ready(function() {
        loadWeather('your_location', '');
    });
}
```

## Questions and issues

You can use the github issue tracker for bug reports, feature requests, questions.

## Thanks

Thanks to simplyWeather for its API, r/homelab for being a cool subreddit, and myself for finish the project(for now!).

## License

MIT License

Copyright (c) 2017 Emiliano Montesdeoca del Puerto

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
