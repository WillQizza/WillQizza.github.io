<script lang="ts" setup>
import { useIntersectionObserver } from '@vueuse/core';
import { ref } from 'vue';

const properties = defineProps<{
    repository: string;
    name: string;
    description: string;
    skills: string[];
}>();

const projectDiv = ref<HTMLElement | null>(null);
const projectVisible = ref(false);

useIntersectionObserver(projectDiv, ([entry]) => {
    if (!projectVisible.value) {
        projectVisible.value = entry.isIntersecting;
    }
});

</script>

<template>
    <div :class="projectVisible ? 'project visible' : 'project'" ref="projectDiv">
        <h3 class="title"><a class="repository" :href="properties.repository" target="_blank" rel="noreferrer">{{ properties.name }}</a></h3>
        {{  properties.description  }}
        <br /><br />
        <ul className="skills">
            <li class="skill" v-for="skill in properties.skills">
                {{  skill  }}
            </li>
        </ul>
    </div>
</template>

<style>

.project {
    /* calc(100% / COLS - (padding * 2) + 10px * 2) */
    width: calc(100% / 3 - (20px * 2 + 10px * 2));
    min-width: 330px;
    text-overflow: hidden;
    margin: 10px;
    padding: 20px;
    background: var(--project-box-color);
    color: var(--project-box-font-color);
    border-radius: 10px;
    box-shadow: rgba(100, 100, 100, 0.2) 0px 5px 30px 0px;
    opacity: 0;
    font-size: 1.2em;
}

.project.visible {
    animation: fade-in-bottom 0.5s;
    animation-fill-mode: forwards;
}

.project .title {
    padding-top: 0;
    margin-top: 0;
}

.project .repository {
    color: var(--background-color);
    cursor: pointer;
    text-decoration: underline;
}

.project .skills {
    list-style-type: none;
    padding-inline-start: 0;
}

.project .skills .skill {
    display: inline-block;
    background: var(--project-box-skill-color);

    padding: 10px;
    margin: 10px;
}

.project.placeholder {
    opacity: 0;
}
</style>