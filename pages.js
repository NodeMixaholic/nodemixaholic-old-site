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

//Sparksammy Pages
//A FOSS JS-based CMS

HTMLArray = []

HTMLArray.push(`<img src="me.png" width="5%"></img><h2>Hello, world! Welcome to my website.</h2><p>Welcome to sparkSammy.com! My name is Rusty, but you can just call me Sparksammy. However, please spell the brand "sparkSammy" as sparkSammy. My skills are programming, eating, sleeping, working with computer-based technology. If you see any silly posts from me on social media, they are probably from a long time ago or itâ€™s someone pretending to be me, so keep that in mind. Most importantly, enjoy my website!

<br>
<p><h3><i>Have a great one!</i></h3></p><p><h4><i>Peace!</i></h4></p><br><p align="center">"Be yourself; Everyone else is already taken".</p>
<p align="right">--Oscar Wilde.</p>
<p>"Find a balance between freedom, comfort, and flexibility; as there is no such thing as full freedom." ~~Sparksammy</p>
<h2>Want to help me out?</h2><br><p>Want to help make sparkSammy.com and our servers better, buy me a coffee, and perhaps a computer with a few clicks? Maybe less?  If so, please donate to my paypal. Thanks!<br>
<form action="https://www.paypal.com/donate" method="post" target="_top">
<input type="hidden" name="business" value="samuel.lord@tutanota.com" />
<input type="hidden" name="currency_code" value="USD" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
<img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
</form>
</p>
`);

HTMLArray.push(`<h2>Hello, world! Welcome to my blog!</h2> <hr> 10/31/2020 <h3>Hello, world!</h3><br> <p>Hello, my name is Rusty, but you can call me Sparksammy! I worked quite a bit on this site, but now there's a huge banner for WiX. Oh well. It bothers me quite a bit, because I am stuck on the Free plan until I get a TON of cash, but I don't want to pay like 14$/month just to get a website builder. In fact, I prefer my software to be FOSS when it's feasible. Oh well. Good night.

<br>
Update: went to sleep at 3:20am. just finished the site. Mostly minor touches between then and now, but a lot of minor touches. Good night.
<br>

Update 2: Oops! I forgot to add this. "Find a balance between freedom, comfort, and flexibility; as there is no such thing as full freedom." ~~Rusty (Sparksammy) Sparkyford</p>
Update 3 (11/4/2020): This was when my site used WiX, made a few days before this version of the site.

<h2>A quick update</h2> <hr> 5/8/2021 <h3>Quick update time!</h3> <br> <p>I am now on Odysee, and I have a new service I am testing called BasedNet, located at sparksammy.com:2052! Also I will leave this here for all you OGs who remember: rofl.spaksammy.com/rofl-anarchy.sparksammy.com. Good night!<br> Update 5/8/2021: portarofl.sparksammy.com:42944/portarofl-anarchy.sparksammy.com:42943</p>
`);

HTMLArray.push(`<li><a onclick="loadLocalPage(0)" href="#">Home</a></li>
      <li><a onclick="loadLocalPage(1)" href="#">Blog</a></li>
      <li><a href="https://github.com/sparksammy">GitHub</a></li>`);

function loadLocalPage(pageID) {
	var html = HTMLArray[pageID]
	document.getElementById("mainScreen").innerHTML = html
}



document.addEventListener('DOMContentLoaded', function() {
	const urlParams = new URLSearchParams(window.location.search);
	const pageid=urlParams.get("page")
  	loadLocalPage(parseFloat(pageid))
}, false);
