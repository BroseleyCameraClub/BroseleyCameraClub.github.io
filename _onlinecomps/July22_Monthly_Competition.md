---
layout: page
title: July's Monthly Competition
description: July's Monthly Online Competition.
date: 2022-07-18 19:00:00
---


This is our _'July's Monthly - Online Competition'_. 
It's pretty simple. Please look through all of the images below please, and then place your vote - 
<a target="_blank" href="https://surveyhero.com/c/ijzwsiea">VOTE HERE</a> 


<p>Title for the competition is <strong>Historical Sites</strong> e.g. Heritage/Trust. </p> 

If you want to go straight to the *table view* click <a href="#tableView">HERE</a>

<!-- <br>
## !! VOTING IS NOW CLOSED !!
<br> -->

<br>

<!-- This loops through all the images in specified folder -->
{% for image in site.static_files %}
    {% if image.path contains 'assets/img/July22_Monthly/' %}
<div class="Number">{{ image.basename }}</div>

<!-- This runs and checks if there is a matching author in the file -->
    {% for july22MonAuth in site.data.july22MonAuth %}
      {% if image.basename == july22MonAuth.Img_Name %}
<div class="subName">By - {{ AAAjuly22MonAuth.Author }}</div>
      {% endif %}
    {% endfor %}


<div>
    <img class="col three Comp_Img" src="{{ site.baseurl }}{{ image.path }}" alt="{{ image.basename }}">
</div>
    {% endif %}
{% endfor %}



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
    {% if image.path contains 'assets/img/July22_Monthly' %}
        {% assign imp_pat = image.path | remove_first: "/" %}
<div class="grid__item" data-size="1280x1280">  
    <a href="{{ site.baseurl }}{{ image.path }}" class="img-wrap" alt="{{ image.basename }}">
        <img src="{{ site.baseurl }}{{ image.path }}" alt="{{ image.basename }}" />

    {% for july22MonAuth in site.data.july22MonAuth %}
        {% if image.basename == july22MonAuth.Img_Name %}
<div class="description description--grid">{{ image.basename }} - {{ AAjuly22MonAuth.Author }}</div>
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
<br>

<div class="col three caption">
    Return to <a href="#top">TOP</a>
</div>

<hr>





