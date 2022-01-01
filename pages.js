/*
@licstart
Copyright (c) Samuel Lord

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
@licend
*/

//Pages

HTMLArray = []
var menuActive = false
var previousHTML;
HTMLArray.push(`
<h1>Hello, world! Welcome to my app/website.</h1><br>
<p>Welcome! My name is Sam, but you can just call me NodeMixaholic. My skills are programming, eating, sleeping, working with computer-based technology. If you see any silly posts from me on social media, they are probably from a long time ago or it's someone pretending to be me, so keep that in mind. Most importantly, enjoy my app/website!</p>
<p>Have a great and safe life!</p>
`);

HTMLArray.push(`
<p>tfw you find an easter egg.</p>
`);

HTMLArray.push(`<li><a onclick="loadLocalPage(0); menuActive = false;" href="#">Home</a></li>
      <li><a href="/blog2022" target="_blank">Blog</a></li>
      <li><a href="https://odysee.com/@sparksammy:c?order=new" target="_blank">Videos (Odysee, it has exclusives!)</a></li>
      <li><a href="https://youtube.com/sparksammy1" target="_blank">Videos (Youtube, no exclusives...)</a></li>
      <li><a href="https://twitch.tv/NodeMixaholic" target="_blank">Twitch</a></li>
      <li><a href="https://github.com/nodemixaholic" target="_blank">GitHub</a></li>
      <li><a href="/why-roblox-is-evil/" target="_blank">Why ROBLOX is evil</a></li>
`);

function loadLocalPage(pageID) {
	var html = HTMLArray[pageID]
	document.getElementById("mainScreen").innerHTML = html
}



document.addEventListener('DOMContentLoaded', function() {
	const urlParams = new URLSearchParams(window.location.search);
	const pageid=urlParams.get("page")
  	if (pageid != null) {
		loadLocalPage(parseFloat(pageid))
	}
}, false);

function menu() {
	let menuHTML = HTMLArray[HTMLArray.length - 1]
	if (menuActive == false) {
		previousHTML = document.getElementById("mainScreen").innerHTML
		document.getElementById("mainScreen").innerHTML = menuHTML
		menuActive = true
	} else {
		document.getElementById("mainScreen").innerHTML = previousHTML
		menuActive = false
	}
}
