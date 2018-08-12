---
layout: page
title: Gallery
description: This is a gallery from the Broseley Camera Club Members.
menu: main
description:
permalink: /gallery/
---

The programme we set out each year is not only to discuss different technical aspect of photography, different topics of photography, but also to inspire our members to get out and about to practice, and research different aspects of photography, particularly the areas they enjoy the most.

We also help on a one to one basis throughout the year on our outings and talks, every meeting has time for members to mingle and ask the more 'experienced' members questions.

We have a range of abilities from complete novice, to highly experienced. All of which try to help each other out where possible to improve both knowledge and images.

As members you can also have some featured images, please send them into <a href="mailto:grahamwelsby@gmail.com">Graham Welsby</a> and we'll get them added to the members gallery.

Please click the links below to browse through some of our featured and member galleries...

<br>

{% include featuredGallery.html %}

<br><br>
<div id="membersGallery">
    <h4>Members Galleries</h4>
    <!-- Members Gallery Loop -->
    {% for project in site.portfolio limit:9 %}
    {% if project.redirect %}
    <div class="project">
        <div class="thumbnail">
            <a href="{{ project.redirect }}" target="_blank">
            {% if project.img %}
            <img class="thumbnail" src="{{ project.img }}"/>
            {% else %}
            <div class="thumbnail blankbox"></div>
            {% endif %}    
            <span>
                <h1>{{ project.title }}</h1>
                <br/>
                <p>{{ project.description }}</p>
            </span>
            </a>
        </div>
    </div>
    {% else %}

<div class="project ">
    <div class="thumbnail">
        <a href="{{ site.baseurl }}{{ project.url }}">
        {% if project.img %}
        <img class="thumbnail" src="{{ project.img }}"/>
        {% else %}
        <div class="thumbnail blankbox"></div>
        {% endif %}    
        <span>
            <h1>{{ project.title }}</h1>
            <br/>
            <p>{{ project.description }}</p>
        </span>
        </a>
    </div>
</div>
    {% endif %}
    {% endfor %}
</div>