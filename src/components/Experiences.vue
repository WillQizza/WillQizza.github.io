<script lang="ts" setup>
    import experiences from '../assets/experience.json';
</script>

<template>
    <div class="container">
        <h1>Experience</h1>
        <hr />
        <div class="experiences">
            <div class="experience visible" v-for="experience in experiences">
                <div class="timeline">
                    <div class="timeline-icon">
                        <font-awesome-icon class="fas-icon" :icon="['fas', 'location-dot']" />
                    </div>
                    <div class="timeline-line"></div>
                </div>
                <div class="info">
                    <h2 class="company">{{ experience.company }}</h2>
                    <i class="job-title">{{ experience.title }}</i><br />
                    <span class="duration">
                        {{ experience.from.month }} {{ experience.from.year }} - {{ !experience.to.month || !experience.to.year ? 'Present' : `${experience.to.month} ${experience.to.year}` }}
                    </span>
                    <ul class="responsibilities">
                        <li class="responsibility" v-for="responsibility in experience.responsibilities">{{ responsibility }}</li>
                    </ul>
                </div>
                <div class="clear"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    background-color: var(--background-color);
    width: 100%;
    padding-top: var(--nav-height);
    padding-bottom: 40px;
    font-size: 1.3em;
}

.container h1 {
    text-align: center;
    font-size: 3em;
    padding-bottom: 0;
    padding-top: 40px;
    margin-bottom: 0;
}

.container hr {
    border: 1px solid var(--font-color);
    width: 20%;
}

.experiences {
    padding-top: 50px;
}

.experience {
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    color: #eeeeee;
    display: flex;
    align-items: stretch;
    opacity: 0.3;
}

.experience.visible {
    animation: partial-to-fade-in 1s;
    animation-fill-mode: forwards;
}

.experience .company {
    margin: 0;
    padding: 0;
}

.experience .job-title, .experience .duration {
    font-size: 1.1em;
}

.experience .responsibilities {
    padding-inline-start: 1em;
}

.experience .responsibilities .responsibility {
    padding-bottom: 10px;
}

.experience .info {
    width: 90%;
    padding-bottom: 100px;
}

.experience .timeline {
    width: 10%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.experience .timeline .timeline-icon {
    float: right;
    margin-right: 50px;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: var(--font-color);
    position: relative;
    left: 24.5px;
    color: var(--background-color);
    text-align: center;
    font-size: 35px;
}

.experience .timeline .fas-icon {
    padding-top: 8px;
    padding-bottom: 5px;
}

.experience .timeline .timeline-line {
    height: 100%;
    width: 2px;
    float: right;
    margin-right: 50px;
    background-color: var(--font-color);
}

.experience .clear {
    clear: both;
}
</style>