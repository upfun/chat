import React from 'react';
import { connect } from 'dva';
import ChatHeader from './ChatHeader';
import ChatPresent from './ChatPresent';
import ChatInput from './ChatInput';
import Login from '../Login';
import styles from './Conversation.css';

export default connect(props => ({
  user: props.auth.user,
}))(props => {
  const { cid, robotParams, active, user, sessionType } = props;
  return (<div className={styles.panel} style={active ? { display: 'flex' } : { display: 'none' }}>
    <ChatHeader {...props} />
    <ChatPresent conversations={props.conversations} sessionType={sessionType} />
    {user ? <ChatInput onSendMessage={(message) =>
      props.dispatch({
        type: 'chat/sendMessage',
        payload: { message, cid, robotParams, user },
      })}
    /> : <Login />}
  </div>);
});
