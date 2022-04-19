---
layout: page
title: April's Monthly Competition
description: April's Monthly Online Competition.
date: 2022-04-18 19:00:00
---


This is our _'April's Monthly - Online Competition'_. 
It's pretty simple. Please look through all of the images below please, and then place your vote - <a target="_blank" href="https://surveyhero.com/c/9794dhek">VOTE HERE</a> 


<p>Title for the competition is <strong>Shapes</strong>. </p> 

If you want to go straight to the *table view* click <a href="#tableView">HERE</a>

<!-- <br>
## !! VOTING IS NOW CLOSED !!
<br> -->

<br>

<!-- This loops through all the images in specified folder -->
{% for image in site.static_files %}
    {% if image.path contains 'assets/img/AprilMonthly22/' %}
<div class="Number">{{ image.basename }}</div>

<!-- This runs and checks if there is a matching author in the file -->
    {% for apr22MonthAuth in site.data.apr22MonthAuth %}
      {% if image.basename == apr22MonthAuth.Img_Name %}
<div class="subName">By - {{ wwwwwapr22MonthAuth.Author }}</div>
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
    {% if image.path contains 'assets/img/AprilMonthly22' %}
        {% assign imp_pat = image.path | remove_first: "/" %}
<div class="grid__item" data-size="1280x1280">  
    <a href="{{ site.baseurl }}{{ image.path }}" class="img-wrap" alt="{{ image.basename }}">
        <img src="{{ site.baseurl }}{{ image.path }}" alt="{{ image.basename }}" />

    {% for apr22MonthAuth in site.data.apr22MonthAuth %}
        {% if image.basename == apr22MonthAuth.Img_Name %}
<div class="description description--grid">{{ image.basename }} - {{ wwwwwapr22MonthAuth.Author }}</div>
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





