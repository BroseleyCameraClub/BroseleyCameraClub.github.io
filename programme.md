---
layout: default
title: Programme
permalink: /programme/
---

<div class="header-bar">
  <h1>*programme</h1>
      <h2>what are we up to? and what have we done...</h2>
          <br/>
            <hr>
          <br/>
</div>

<ul class="post-list">
    {% for programme in site.programme reversed limit:5 %}
      <li>
        <h2><a class="programme-title" href="{{ programme.url | prepend: site.baseurl }}">{{ programme.title }}</a></h2>
        <p class="programme-meta">{{ programme.date | date: "%B %-d, %Y" }}</p>
        <p>{{ programme.description }}</p>
        <br/>
        <hr/>
      </li>
    {% endfor %}
</ul>