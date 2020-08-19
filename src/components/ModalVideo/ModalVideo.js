import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { Modal } from 'antd'

import './ModalVideo.scss'

export default function ModalVideo (props) {
    const { isClose, isOpen, videoPlatform, videokey } = props
    const [ urlVideo, seturlVideo ] = useState(null)

    useEffect(
        () => {
            switch (videoPlatform) {
                case 'YouTube':
                    seturlVideo(`https://youtu.be/${videokey}`)
                    break

                case 'Vimeo':
                    seturlVideo(`https://vimeo.com/${videokey}`)
                    break
                default:
                    break
            }
        },
        [ videoPlatform, videokey ]
    )

    return (
        <Modal className="modal-video" visible={isOpen} centered onCancel={isClose} footer={false}>
            <ReactPlayer url={urlVideo} controls />
        </Modal>
    )
}
