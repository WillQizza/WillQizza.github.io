<script setup lang="ts">
    import projects from '../assets/projects.json';
    import Project from './Project.vue';
    import { projectsRef } from '../waypoints';
    
    const IDEAL_COLUMNS = 3;

    const placeholderProjectCount = projects.length % IDEAL_COLUMNS > 0 ? 3 - (projects.length % IDEAL_COLUMNS) : 0;
</script>

<template>
    <div class="container" id="projects-section" ref="projectsRef">
        <h1>Projects</h1>
        <hr />
        <div class="projects">
            <Project :repository="project.repository" :description="project.description" :name="project.name" :skills="project.skills" v-for="project in projects" />

            <!-- To retain 3 columns when we have a non-divisible by 3 amount of projects -->
            <div class="project placeholder" v-for="_ in placeholderProjectCount"></div>
        </div>
    </div>
</template>

<style scoped>
.container {
    background-color: var(--secondary-background-color);
    width: 100%;
    padding-top: var(--nav-height);
    padding-bottom: 40px;
}

.container h1 {
    text-align: center;
    font-size: 3.3em;
    padding-bottom: 0;
    padding-top: 40px;
    margin-bottom: 0;
}

.container hr {
    border: 1px solid var(--font-color);
    width: 20%;
}

.projects {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: center;
    margin-left: 10%;
    margin-right: 10%;
}
</style>