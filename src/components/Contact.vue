<script lang="ts" setup>
import photo from '../assets/me.jpg';
</script>

<template>
    <div class="container">
        <h1>Contact</h1>
        <hr />
        <div class="content">
            <div class="avatar">
                <img alt="William Qi | Software Developer" :src="photo" width="192" height="192" />
            </div>
            <p>Hello there! I'm William, a passionate fourth-year Computing Science student at the University of Alberta graduating this April. Since the age of 9, I've been captivated by programming, and my love for coding has only grown stronger over the years.</p>
            <p>Whether it's building applications that enhance user experiences, developing software to address real-world problems, or creating innovative solutions to make everyday tasks more efficient, I find the process of coding and its potential to create meaningful change thrilling!</p>
            <p>Although, when I'm not immersed in coding, you'll likely find me indulging in papercraft, getting lost in a good book, cosplaying as some of my favorite characters, or just exploring the vast world wide web.</p>
            <p>Let's connect and create a better tomorrow together!</p>
            <div class="socials">
                <a href="mailto:williamqi.250@gmail.com">
                    <font-awesome-icon :icon="['fas-solid', 'envelope']" />
                </a> 
                <a href="https://github.com/willqizza/" target="_blank" rel="noreferrer">
                    <font-awesome-icon :icon="['fab', 'github']" />
                </a>
                <a href="https://www.linkedin.com/in/william-qi/" target="_blank" rel="noreferrer">
                    <font-awesome-icon :icon="['fab', 'linkedin']" />
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    min-height: 100vh;
    background-color: var(--secondary-background-color);
    width: 100%;
    padding-top: var(--nav-height);
    font-size: 1.23em;
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

.container .avatar {
    margin-left: auto;
    margin-right: auto;
    width: min-content;
    max-width: 100%;
    margin-bottom: 20px;
}

.container .avatar img {
    border-radius: 50%;
    border: 4px solid #fff;
}

.container .content {
    font-size: 1.1em;
    padding: 20px;
    width: 30%;
    min-width: 330px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}

.container .content .socials {
    padding-top: 30px;
}

.container .content .socials a {
    font-size: 2.5em;
    margin-left: 10px;
    margin-right: 10px;
}
</style>