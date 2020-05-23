---
layout: page
title: May Competition
description: April's Online Competition.
date: 2020-05-04 19:00:00
---


This is our _'May Online Competition'_. It's pretty simple. Please look through all of the images below please, and then place your vote - <!-- <a target="_blank" href="https://surveyhero.com/c/d3e7a72b">VOTE HERE</a>  -->


<p>Title for the competition is <strong>Showers &amp; Droplets</strong>. This is a relatively open subject.</p> 

<p>We have a <strong>NEW</strong> viewing format for this month. You can scroll through all of the entries, and at the bottom is a new grid view so you can see more in one go.</p>

If you want to go straight to the __new__ *table view* click <a href="#tableView">HERE</a>

<br>
## !! VOTING IS NOW CLOSED !!
<br>

<p>Please do take a moment to have a read through our <a href="{{ site.baseurl }}/Judging_Images/" target="_blank">'Judging Tips'</a>, just to refresh what we should be looking for when judging our images.</p> 



<br>

<!-- This loops through all the images in specified folder -->
{% for image in site.static_files %}
    {% if image.path contains 'assets/img/May_Competition/' %}
<div class="Number">{{ image.basename }}</div>

<!-- This runs and checks if there is a matching author in the file -->
    {% for mayAuth in site.data.mayAuth %}
      {% if image.basename == mayAuth.Img_Name %}
<div class="subName">By - {{ mayAuth.Author }}</div>
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
    {% if image.path contains 'assets/img/May_Competition/' %}
        {% assign imp_pat = image.path | remove_first: "/" %}
<div class="grid__item" data-size="1280x1280">  
    <a href="{{ site.baseurl }}{{ image.path }}" class="img-wrap" alt="{{ image.basename }}">
        <img src="{{ site.baseurl }}{{ image.path }}" alt="{{ image.basename }}" />

    {% for mayAuth in site.data.mayAuth %}
        {% if image.basename == mayAuth.Img_Name %}
<div class="description description--grid">{{ image.basename }} - {{ mayAuth.Author }}</div>
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





