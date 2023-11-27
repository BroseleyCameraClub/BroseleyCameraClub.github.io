---
layout: page
title: November's Lancaster Memorial Competition
description: November's Lancaster Memorial Online Competition.
date: 2023-11-21 19:00:00
---

This is our _'November's Lancaster Memorial - Online Competition'_. 

Please review the images and bring your votes with you to the next meeting where we will compile the votes and count them all up.
<!-- <a target="_blank" href="https://surveyhero.com/c/k3qpnzzw">VOTE HERE</a>  -->


<p>Title for the competition is <strong>Black and White</strong></p> 

If you want to go straight to the *table view* click <a href="#tableView">HERE</a>

<br>
### !! VOTING IS NOW CLOSED !!
<br>

<br>

<!-- This loops through all the images in specified folder -->
{% for image in site.static_files %}
    {% if image.path contains 'assets/img/November23_Lancaster/' %}
<div class="Number">{{ image.basename }}</div>

<!-- This runs and checks if there is a matching author in the file -->
    {% for nov23LancAuth in site.data.nov23LancAuth   %}
      {% if image.basename == nov23LancAuth.Img_Name %}
<div class="subName">By - {{ nov23LancAuth.Author }}</div>
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
    {% if image.path contains 'assets/img/November23_Lancaster' %}
        {% assign imp_pat = image.path | remove_first: "/" %}
<div class="grid__item" data-size="1280x1280">  
    <a href="{{ site.baseurl }}{{ image.path }}" class="img-wrap" alt="{{ image.basename }}">
        <img src="{{ site.baseurl }}{{ image.path }}" alt="{{ image.basename }}" />

    {% for nov23LancAuth in site.data.nov23LancAuth %}
        {% if image.basename == nov23LancAuth.Img_Name %}
<div class="description description--grid">{{ image.basename }} - {{ nov23LancAuth.Author }}</div>
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





