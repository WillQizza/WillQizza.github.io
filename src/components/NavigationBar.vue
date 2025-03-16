<script lang="ts" setup>
import { homeRef, projectsRef, experienceRef, contactRef } from '../waypoints';

function toWaypoint(waypoint: HTMLElement) {
    waypoint.scrollIntoView({
        behavior: 'smooth'
    });
}
</script>

<template>
    <div class="nav">
        <ul>
            <li><a href="/resume.pdf" target="_blank">Resume</a></li>
            <li><a @click='toWaypoint(contactRef!)'>Contact</a></li>
            <li><a @click='toWaypoint(experienceRef!)'>Experience</a></li>
            <li><a @click='toWaypoint(projectsRef!)'>Projects</a></li>
            <li><a @click='toWaypoint(homeRef!)'>Home</a></li>
        </ul>
    </div>
</template>

<style scoped>
.nav {
    position: fixed;
    top: 0;
    background-color: var(--background-color);
    width: 100%;
    height:var(--nav-height);
    z-index: 100;
}

.nav a {
    cursor: pointer;
}

.nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.nav ul li {
    float: right;
    display: inline;
    margin-right: 30px;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 20px;
}
</style>