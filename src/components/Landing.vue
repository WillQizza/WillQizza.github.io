<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

<template>
    <div class="landing-container">
        <div class="landing-info">
            <h1>Hey, I'm William</h1>
            <h2>Software Developer</h2>
            <div class="tagline-container">
                <p>I build things that I think are pretty cool</p>
            </div>
        </div>

        <div class="hint-container">
            <a href="#projects" @click=''>
                <div>
                    View my Projects
                    <br />
                    <font-awesome-icon :icon="['fas', 'angle-down']" />
                </div>
            </a>
        </div>
    </div>
</template>

<style scoped>
.landing-container {
    width: 100%;
    height: 100%;
}

.landing-info {
    position: relative;
    top:50%;
    transform: translateY(-50%);
    animation: fade-in-bottom 1s;
}

.landing-info h1, .landing-info h2 {
    margin-top: 0;
    margin-bottom: 0;
    text-align: center;
}

.landing-info h1 {
    font-size: 6em;
}

.landing-info h2 {
    font-size: 2.5em;
}

.tagline-container {
    width: min-content;
    margin-left: auto;
    margin-right: auto;
}

.tagline-container p {
    width: 0;
    animation: typing 2.5s steps(60, start), caret 1s step-end infinite;
    animation-delay: 1s, 4s;
    animation-fill-mode: forwards;

    font-size: 1.3em;
    font-weight: bold;
    overflow: hidden;
    white-space: nowrap;
}

.hint-container {
    position: absolute;
    bottom: 0;
    text-align: center;
    width: 100%;
    opacity: 0;
    animation: fade-in-bottom 1s;
    animation-delay: 4s;
    animation-fill-mode: forwards;
}

.hint-container div {
    margin-left: auto;
    margin-right: auto;
    width: min-content;
    white-space: nowrap;
    padding: 15px;
    font-size: 1.2em;
}
</style>