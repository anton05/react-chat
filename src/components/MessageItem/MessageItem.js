import React from 'react'
import styles from './MessageItem.style'

export default function MessageItem({ message, deleteMessage }) {
    return (
        <div>
            <div style={styles.messageContainer}>
                <div style={styles.messageWrapper} onClick={() => deleteMessage(message.text)}>
                    <p style={{ ...styles.message, textDecoration: 'none' }}>{message.text}</p>
                </div>
            </div>

        </div>
    )
}
