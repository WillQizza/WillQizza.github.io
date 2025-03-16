import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Experience from '../Experience.vue';

describe('Experience', () => {
    it('should render Present if the end date is null', () => {
        const wrapper = mount(Experience, {
            props: {
                company: '',
                title: '',
                from: { year: 2025, month: 'January' },
                to: { year: null, month: null },
                responsibilities: []
            }
        });

        expect(wrapper.text()).to.include('Present');
    });

    it('should render the end date if not null', () => {
        const wrapper = mount(Experience, {
            props: {
                company: '',
                title: '',
                from: { year: 2025, month: 'January' },
                to: { year: 2026, month: 'January' },
                responsibilities: []
            }
        });

        expect(wrapper.text()).to.include('January 2026');
    });
})
