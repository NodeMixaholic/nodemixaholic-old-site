HTMLArray = []

HTMLArray.push(`<h2>Hello, world! Welcome to my website.</h2><p>Welcome to sparkSammy.com! My name is Samuel Lord, but you can just call me Sparksammy. However, please spell the brand "sparkSammy" as sparkSammy. My skills are programming, eating, sleeping, working with computer-based technology. If you see any silly posts from me on social media, they are probably from a long time ago or it’s someone pretending to be me, so keep that in mind. Most importantly, enjoy my website!

Want to donate some Bitcoin to me? Send it here: bc1ql9p2h8zpuxwyupgc2c29r6sujn7dmlkfx6gp3t

Also: you could share this site using this link if nothing else: https://cb.run/sparksmy
<br>
<p><h3><i>Have a great one!</i></h3></p><p><h4><i>Peace!</i></h4></p><br><p align="center">"Be yourself; Everyone else is already taken".</p>
<p align="right">--Oscar Wilde.</p>
<p>"Find a balance between freedom, comfort, and flexibility; as there is no such thing as full freedom." ~~Samuel (Sparksammy) Lord</p>
`);

HTMLArray.push(`<h2>Hello, world! Welcome to my blog!</h2> <hr> 10/31/2020 <h3>Hello, world!</h3><br> <p>Hello, my name is Samuel Lord, but you can call me Sparksammy! I worked quite a bit on this site, but now there's a huge banner for WiX. Oh well. It bothers me quite a bit, because I am stuck on the Free plan until I get a TON of cash, but I don't want to pay like 14$/month just to get a website builder. In fact, I prefer my software to be FOSS when it's feasible. Oh well. Good night.

<br>
Update: went to sleep at 3:20am. just finished the site. Mostly minor touches between then and now, but a lot of minor touches. Good night.
<br>

Update 2: Oops! I forgot to add this. "Find a balance between freedom, comfort, and flexibility; as there is no such thing as full freedom." ~~Samuel (Sparksammy) Lord</p>
Update 3 (11/4/2020): This was when my site used WiX, made a few days before this version of the site.`);

HTMLArray.push(`<li><a onclick="loadLocalPage(0)" href="#">Home</a></li>
      <li><a onclick="loadLocalPage(1)" href="#">Blog</a></li>
      <li><a href="https://github.com/sparksammy">GitHub</a></li>`);

function loadLocalPage(pageID) {
	var html = HTMLArray[pageID]
	document.getElementById("mainScreen").innerHTML = html
}
