import React, { useState } from 'react'
import styles from './AddMessage.styles'

export default function AddMessage({addMessage}) {
    let [message, setMessage] = useState('')
    return (
        <div>
            <input style={styles.inputField}
                placeholder='Please write your message here...'
                onChange={(event) => {
                    setMessage(event.target.value)
                }} value={message} />
            <button style={styles.sendButton} onClick={() => {
                addMessage(message);
                setMessage('')
                }}>Send</button>
        </div>
    )
}
