<script setup lang="ts">
    import projects from '../assets/projects.json';
    
    const IDEAL_COLUMNS = 3;

    const placeholderProjectCount = projects.length % IDEAL_COLUMNS > 0 ? 3 - (projects.length % IDEAL_COLUMNS) : 0;
</script>

<template>
    <div class="container">
        <h1>Projects</h1>
        <hr />
        <div class="projects">
            <div class="project visible" v-for="project in projects">
                <h3 class="title"><a class="repository" :href="project.repository" target="_blank" rel="noreferrer">{{ project.name }}</a></h3>
                {{  project.description  }}
                <br /><br />
                <ul className="skills">
                    <li class="skill" v-for="skill in project.skills">
                        {{  skill  }}
                    </li>
                </ul>
            </div>

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