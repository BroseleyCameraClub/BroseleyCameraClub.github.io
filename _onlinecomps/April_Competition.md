---
layout: page
title: April Competition
description: April's Online Competition.
date: 2020-04-04 19:00:00
---


This is our _'April Online Competition'_. It's pretty simple. Please look through all of the images below please, and then place your VOTE HERE
<!-- <a target="_blank" href="https://surveyhero.com/c/884aefb8">VOTE HERE</a> 
-->

<p>Title for the competition is <strong>Macro/Close-Ups</strong>. This is an open subject.</p> 

If you want to go straight to the __new__ *table view* click <a href="#tableView">HERE</a>

<br>

## !! VOTING IS NOW CLOSED !!

<br>
<p><a href="{{ site.baseurl }}/Judging_Images/" target="_blank">Reminder on Judging Tips</a></p> 



<br>

<div class="comp_LongView">

<!-- This loops through all the images in specified folder -->
{% for image in site.static_files %}
    {% if image.path contains 'assets/img/April_Competition/' %}
<div class="Number">{{ image.basename }}</div>

<!-- This runs and checks if there is a matching author in the file -->
    {% for aprAuth in site.data.aprAuth %}
      {% if image.basename == aprAuth.Img_Name %}
<div class="subName">By - {{ aprAuth.Author }}</div>
      {% endif %}
    {% endfor %}


<div>
    <img class="col three Comp_Img" src="{{ site.baseurl }}{{ image.path }}" alt="{{ image.basename }}">
</div>
    {% endif %}
{% endfor %}

</div>

<br>
<br>

<hr id="tableView">

<br>
<br>

<div class="col three caption">
    <h4>HAVE A WALK ROUND THE TABLE </h4>
    <p>Click on an image to enlarge it.</p>    
</div>

<br>
<br>

<!-- MASONARY GRID -->
<div class="full-width">
	<div class="grid">

{% for image in site.static_files %}
    {% if image.path contains 'assets/img/April_Competition/' %}
        {% assign imp_pat = image.path | remove_first: "/" %}
<div class="grid__item" data-size="1280x1280">  
    <a href="{{ site.baseurl }}{{ image.path }}" class="img-wrap" alt="{{ image.basename }}">
        <img src="{{ site.baseurl }}{{ image.path }}" alt="{{ image.basename }}" />

    {% for aprAuth in site.data.aprAuth %}
        {% if image.basename == aprAuth.Img_Name %}
<div class="description description--grid">{{ image.basename }} - {{ aprAuth.Author }}</div>
        {% endif %}
    {% endfor %}

</a>
</div>

    {% endif %}
{% endfor %}
	</div>

<!-- /grid -->
<div class="preview">
	<button class="action action--close"><i class="fa fa-times"></i><span class="text-hidden">Close</span></button>
	<div class="description description--preview"></div>
</div>
</div>
<!-- MASONARY GRID END -->

<br>

<!-- <p>If you have made your choice - please do not forget to vote <a target="_blank" href="https://surveyhero.com/c/884aefb8">HERE</a></p> -->

<br>
<br>

<div class="col three caption">
    Return to <a href="#top">TOP</a>
</div>

<hr>





