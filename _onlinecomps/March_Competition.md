---
layout: page
title: March Competition
description: Our first ever Online Competition.
date: 2020-03-20 19:00:00
---


<p>This is our first 'Online Competitiion' that we have hosted. It's pretty simple. Please look through all of the images below please, and then place your vote HERE
	<!-- <a target="_blank" href="https://surveyhero.com/c/884aefb8">HERE</a> -->
</p>
<br>

## VOTING IS NOW CLOSED

<br>
<p>Title for the competition is <strong>Working Hands</strong> but please remember that due to the movement restrictions we have opened this up to just <strong>HANDS</strong></p> 

If you want to go straight to the __new__ *table view* click <a href="#tableView">HERE</a>

<br>	

{% for image in site.static_files %}
    {% if image.path contains 'assets/img/March_Competition/' %}
<div class="Number">{{ image.basename }}</div>

    
    {% for marAuth in site.data.marAuth %}
      {% if image.basename == marAuth.Img_Name %}
<div class="subName">By - {{ marAuth.Author }}</div>
      {% endif %}
    {% endfor %}


<div>
    <img class="col three Comp_Img" src="{{ site.baseurl }}{{ image.path }}" alt="{{ image.basename }}">
</div>
    {% endif %}
{% endfor %}



<br>
<br>
<!-- GALLERY VIEW -->
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
    {% if image.path contains 'assets/img/March_Competition/' %}
        {% assign imp_pat = image.path | remove_first: "/" %}
<div class="grid__item" data-size="1280x1280">  
    <a href="{{ site.baseurl }}{{ image.path }}" class="img-wrap" alt="{{ image.basename }}">
        <img src="{{ site.baseurl }}{{ image.path }}" alt="{{ image.basename }}" />

    {% for marAuth in site.data.marAuth %}
        {% if image.basename == marAuth.Img_Name %}
<div class="description description--grid">{{ image.basename }} - {{ marAuth.Author }}</div>
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



