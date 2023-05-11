'use client'

import { H } from 'highlight.run'
H.init('ney7vve4', {
    environment: 'production',
    enableStrictPrivacy: false,
    tracingOrigins: true,
    networkRecording: {
        enabled: true,
        recordHeadersAndBody: true,
        urlBlocklist: [
            // insert full or partial urls that you don't want to record here
        ],
    },
})

const Highlight = () => {
    return null
}

export default Highlight