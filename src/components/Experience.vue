<script lang="ts" setup>
import { useIntersectionObserver } from '@vueuse/core';
import { ref } from 'vue';

const properties = defineProps<{
    company: string;
    title: string;
    from: { year: number, month: string };
    to: { year: number | null, month: string | null };
    responsibilities: string[];
}>();

const experienceDiv = ref<HTMLElement | null>(null);
const experienceVisible = ref(false);

useIntersectionObserver(experienceDiv, ([entry]) => {
    if (!experienceVisible.value) {
        experienceVisible.value = entry.isIntersecting;
    }
});

</script>

<template>
    <div :class="experienceVisible ? 'experience visible' : 'experience'" ref="experienceDiv">
        <div class="timeline">
            <div class="timeline-icon">
                <font-awesome-icon class="fas-icon" :icon="['fas', 'location-dot']" />
            </div>
            <div class="timeline-line"></div>
        </div>
        <div class="info">
            <h2 class="company">{{ properties.company }}</h2>
            <i class="job-title">{{ properties.title }}</i><br />
            <span class="duration">
                {{ properties.from.month }} {{ properties.from.year }} - {{ !properties.to.month || !properties.to.year ? 'Present' : `${properties.to.month} ${properties.to.year}` }}
            </span>
            <ul class="responsibilities">
                <li class="responsibility" v-for="responsibility in properties.responsibilities">{{ responsibility }}</li>
            </ul>
        </div>
        <div class="clear"></div>
    </div>
</template>

<style>
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