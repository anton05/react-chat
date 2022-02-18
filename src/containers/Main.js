import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddMessage from '../components/AddMessage/AddMessage'
import MessageItem from '../components/MessageItem/MessageItem'
import { addMessage, deleteMessage } from '../redux/actions'
import styles from './Main.style'

export class Main extends Component {
    render() {
        return (
            <div style={styles.messageContain}>
                {this.props.messageItems.map((message) => {
                    return (<MessageItem message={message} deleteMessage={(message) => this.props.deleteMessage(message)} />);
                })}
                <div style={styles.appContainer}>
                    <div style={styles.container}>
                        <div style={styles.inputWrapper}>
                            <AddMessage addMessage={(message) => { this.props.addMessage(message) }} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    messageItems: state.messageItems
})

const mapDispatchToProps = (dispatch) => ({
    addMessage: (message) => dispatch(addMessage(message)),
    deleteMessage: (message) => dispatch(deleteMessage(message)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
