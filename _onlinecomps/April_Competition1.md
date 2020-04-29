---
layout: comp
title: April Competition
description: April's Online Competition.
date: 2020-04-04 19:00:00
---


This is our _'April Online Competition'_. It's pretty simple. Please look through all of the images below please, and then place your VOTE HERE
<!-- <a target="_blank" href="https://surveyhero.com/c/884aefb8">VOTE HERE</a> -->

<p>Title for the competition is <strong>Macro/Close-Ups</strong>. This is an open subject.</p> 

## VOTING IS NOW CLOSED

<br>
<p><a href="{{ site.baseurl }}/Judging_Images/" target="_blank">Reminder on Judging Tips</a></p> 

<br>

##### HAVE A WALK ROUND THE TABLE - Click on an image to enlarge it.



<br>

<!-- MASONARY GRID -->
<div class="full-width">
	<div class="grid">

{% for image in site.static_files %}
    {% if image.path contains 'assets/img/April_Competition/' %}
    <div class="grid__item" data-size="1280x1280">  
        <a href="{{ site.baseurl }}{{ image.path }}" class="img-wrap" alt="{{ image.name }}">
        <img src="{{ site.baseurl }}{{ image.path }}" alt="{{ image.name }}" />
		<div class="description description--grid">{{ image.name }}</div>
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

<hr>




