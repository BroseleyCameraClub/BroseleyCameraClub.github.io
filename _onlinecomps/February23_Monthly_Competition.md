---
layout: page
title: February's Monthly Competition
description: February's Monthly Online Competition.
date: 2023-02-16 19:00:00
---


This is our _'February's Monthly - Online Competition'_. 

This year we are testing out a new system. Please review the images and bring your votes with you to the next meeting.
<!-- <a target="_blank" href="https://surveyhero.com/c/k3qpnzzw">VOTE HERE</a>  -->


<p>Title for the competition is <strong>Mist & Fog</strong></p> 

If you want to go straight to the *table view* click <a href="#tableView">HERE</a>

<!-- <br>
## !! VOTING IS NOW CLOSED !!
<br> -->

<br>

<!-- This loops through all the images in specified folder -->
{% for image in site.static_files %}
    {% if image.path contains 'assets/img/February23_Monthly/' %}
<div class="Number">{{ image.basename }}</div>

<!-- This runs and checks if there is a matching author in the file -->
    {% for feb23MonAuth in site.data.feb23MonAuth %}
      {% if image.basename == feb23MonAuth.Img_Name %}
<div class="subName">By - {{ feb23MonAuth.Author }}</div>
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
    {% if image.path contains 'assets/img/February23_Monthly' %}
        {% assign imp_pat = image.path | remove_first: "/" %}
<div class="grid__item" data-size="1280x1280">  
    <a href="{{ site.baseurl }}{{ image.path }}" class="img-wrap" alt="{{ image.basename }}">
        <img src="{{ site.baseurl }}{{ image.path }}" alt="{{ image.basename }}" />

    {% for feb23MonAuth in site.data.feb23MonAuth %}
        {% if image.basename == feb23MonAuth.Img_Name %}
<div class="description description--grid">{{ image.basename }} - {{ feb23MonAuth.Author }}</div>
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





