---
title: Organizacija
bg: white
color: green
icon-color: green
fa-icon: users
---


<div class='row'>

<div class = 'column'>
	<h2>Organizacijski odbor</h2>

	{% capture md %} {% include_relative organizacijski_odbor.md %} {% endcapture %}
	{{ md | markdownify }}

</div>


<div class = 'column'>
	<h2>Programski odbor</h2>

	{% capture md %} {% include_relative programski_odbor.md %} {% endcapture %}
	{{ md | markdownify }}
	
</div>

</div>

<center>
<img src='/img/FBF_grb.png' width="25%" style='padding: 5%; min-width: 150px !important'>
<img src='/img/SZ_logo.png' width="30%" style='padding: 5%; min-width: 150px !important'>
<img src='/img/logo/cpsa-300x300.png' width="18%" style='padding: 5%; min-width: 80px !important'>
<img src='/img/sveuc_grb.png' width="25%" style='padding: 5%; min-width: 150px !important'>
</center>


<h2>Počasni odbor</h2>
{% capture md %} {% include_relative pocasni_odbor.md %} {% endcapture %}
{{ md | markdownify }}
