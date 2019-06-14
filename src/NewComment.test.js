import React from 'react'
import { shallow } from 'enzyme'
import NewComment from './NewComment'

describe('<New Comment />', () => {
    it('shiud handle changes in textarea', () => {
        const wrapper = shallow(<NewComment />)
        const event = {
            target: {value: 'test'}
        }
        wrapper.find('textarea').simulate('change', event)
        expect(wrapper.state().newComment).toBe('test')
    })
    it('shoul call sendComment on button click', () => {
        const sendComment = jest.fn()
        const wrapper = shallow(<NewComment sendComment={sendComment}/>)
        const event = {
            target: {value: 'test'}
        }
        wrapper.find('textarea').simulate('change', event)
        wrapper.find('button').simulate('click')
        expect(sendComment).toBeCalledWith('test')
        expect(sendComment.mock.calls[0][0]).toBe('test')
        expect(wrapper.state().newComment).toBe('')
    })
})