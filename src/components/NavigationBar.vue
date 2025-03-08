<script lang="ts" setup>
    function toWaypoint(waypoint: string) {

    }
</script>

<template>
    <div class="nav">
        <ul>
            <li><a href="/resume.pdf" target="_blank">Resume</a></li>
            <li><a href="#contact" @click=''>Contact</a></li>
            <li><a href="#experience" @click=''>Experience</a></li>
            <li><a href="#projects" @click=''>Projects</a></li>
            <li><a href="#home" @click=''>Home</a></li>
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
    font-size: 23px;
}
</style>