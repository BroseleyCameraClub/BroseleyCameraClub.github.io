---
layout: default
title: Programme
description: Broseley Camera Clubs programmes. Here you can find out what we have done and what we are going to be doing.
menu: main
permalink: /programme/
---

<div class="header-bar">
  <h1>*programme</h1>
      <h2>what are we up to? and what have we done...</h2>
          <br/>
            <hr>
          <br/>
</div>

{% assign sorted = site.programme | sort: 'date' | reverse  %} 
<ul class="post-list">
    {% for programme in sorted limit:6 %}
      <li>
        <h2><a class="programme-title" href="{{ programme.url | prepend: site.baseurl }}">{{ programme.title }}</a></h2>
        <p class="programme-meta">{{ programme.date | date: "%-d %B, %Y" }}</p>
        <p>{{ programme.description }}</p>
        <br/>
        <hr/>
      </li>
    {% endfor %}
</ul>