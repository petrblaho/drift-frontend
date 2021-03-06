import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ComparisonHeader from '../ComparisonHeader';

describe('ComparisonHeader', () => {
    let props;

    beforeEach(() => {
        props = {
            factSort: '',
            fetchCompare: jest.fn(),
            masterList: [],
            referenceId: undefined,
            isFirstReference: true,
            removeSystem: jest.fn(),
            stateSort: '',
            systemIds: [],
            toggleFactSort: jest.fn(),
            toggleStateSort: jest.fn(),
            updateReferenceId: jest.fn()
        };
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render correctly', () => {
        const wrapper = shallow(
            <ComparisonHeader { ...props }/>
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render fact sort asc', () => {
        props.factSort = 'asc';
        const wrapper = shallow(
            <ComparisonHeader { ...props }/>
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render fact sort desc', () => {
        props.factSort = 'desc';
        const wrapper = shallow(
            <ComparisonHeader { ...props }/>
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render state sort asc', () => {
        props.stateSort = 'asc';
        const wrapper = shallow(
            <ComparisonHeader { ...props }/>
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render state sort desc', () => {
        props.stateSort = 'desc';
        const wrapper = shallow(
            <ComparisonHeader { ...props }/>
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render fact sort desc on click', () => {
        props.factSort = 'asc';
        const wrapper = shallow(
            <ComparisonHeader { ...props }/>
        );

        wrapper.find('th').first().simulate('click');
        expect(wrapper.find('LongArrowAltUpIcon').length).toEqual(1);
    });

    it('should render fact sort asc on click', () => {
        props.factSort = 'desc';
        const wrapper = shallow(
            <ComparisonHeader { ...props }/>
        );

        wrapper.find('th').first().simulate('click');
        expect(wrapper.find('LongArrowAltDownIcon').length).toEqual(1);
    });

    it('should render state sort none on click', () => {
        props.stateSort = 'desc';
        const wrapper = shallow(
            <ComparisonHeader { ...props }/>
        );

        wrapper.find('th').at(1).simulate('click');
        expect(wrapper.find('ArrowsAltVIcon').length).toEqual(1);
    });

    it('should remove a system', () => {
        /*eslint-disable camelcase*/
        props.masterList = [
            {
                display_name: 'systemA',
                id: 'dc47qffd-09rt-2kw7-8b9b-53f4g716fec5',
                type: 'system',
                updated: '2020-11-02T12:41:59.029271Z'
            }
        ];
        /*eslint-enable camelcase*/

        const wrapper = shallow(
            <ComparisonHeader { ...props }/>
        );

        wrapper.find('a').simulate('click');
        expect(props.removeSystem).toHaveBeenCalled();
    });
});
