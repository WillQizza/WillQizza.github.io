import { ref, type Ref } from 'vue';

const homeRef: Ref<HTMLElement | null> = ref(null);
const projectsRef: Ref<HTMLElement | null> = ref(null);
const experienceRef: Ref<HTMLElement | null> = ref(null);
const contactRef: Ref<HTMLElement | null> = ref(null);

export {
    homeRef,
    projectsRef,
    experienceRef,
    contactRef
};