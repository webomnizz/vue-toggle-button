import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'
import ToggleButton from '@/components/ToggleButton.vue'

describe('ToggleButton', () => {

    let wrapper = '';

    beforeEach(() => {
        wrapper = shallowMount(ToggleButton);
    });

    it ('should render correctly', () => {

        expect(wrapper.find('.toggle__label').text()).to.contain('Off');
        expect(wrapper.vm.currentState).to.be.false;
    });

    it ('should change currentState on toggle', async () => {

        expect(wrapper.find('.toggle__label').text()).to.contain('Off');
        expect(wrapper.vm.currentState).to.be.false;

        wrapper.find('input[type=checkbox]').setChecked();
        
        await wrapper.vm.$nextTick();

        expect(wrapper.find('.toggle__label').text()).to.contain('On');
        expect(wrapper.vm.currentState).to.be.true;
    });

    it ('should not work on disabled property', async () => {

        wrapper.setProps({
            disabled: true
        });

        await wrapper.vm.$nextTick();

        wrapper.find('input[type=checkbox]').setChecked();
        
        await wrapper.vm.$nextTick();

        expect(wrapper.find('.toggle__label').text()).to.contain('Off');
        expect(wrapper.vm.currentState).to.be.false;
    });

    it ('should work with dynamic state change', async () => {

        expect(wrapper.find('.toggle__label').text()).to.contain('Off');
        expect(wrapper.vm.currentState).to.be.false;

        wrapper.setProps({
            defaultState: true
        });

        await wrapper.vm.$nextTick();

        expect(wrapper.find('.toggle__label').text()).to.contain('On');
        expect(wrapper.vm.currentState).to.be.true;
    });

    it ('should trigger custom event', async () => {

        wrapper.find('input[type=checkbox]').setChecked();
        
        await wrapper.vm.$nextTick();

        expect(wrapper.emitted().change[0]).to.be.an('array').that.does.include(true);
    });

    it ('should change the label True/False for both On/Off state', async () => {

        wrapper.setProps({
            labelEnableText: 'True', 
            labelDisableText: 'False'
        });

        await wrapper.vm.$nextTick();

        expect(wrapper.find('.toggle__label').text()).to.contain('False');
    });
});