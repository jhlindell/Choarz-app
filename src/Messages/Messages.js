import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import { clearMessage } from './actions/messageActions';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    height: '50px',
    width: '100%',
    justifyContent: 'left',
    alignItems: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  card: {
    padding: '5px',
    margin: '2px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  SUCCESS: {
    backgroundColor: 'green',
    color: 'black',
  },
  WARNING: {
    backgroundColor: 'orange',
    color: 'black',
  },
  ERROR: {
    backgroundColor: 'red',
    color: 'black',
  },
});

export default function MessageContainer() {
  const messages = useSelector(state => state.messages);
  const dispatch = useDispatch();
  const classes = useStyles();

  function deleteCard(id) {
    dispatch(clearMessage(id));
  }

  function renderMessages() {
    if (messages.length) {
      return (
        <div className={classes.container}>
          {messages.map(message => {
            return (
              <Card
                onClick={() => deleteCard(message.id)}
                key={message.id + message.message}
                className={classNames(classes.card, classes[message.variant])}
              >
                <span>{message.message}</span>
              </Card>
            );
          })}
        </div>
      );
    }
    return null;
  }
  return <div>{renderMessages()}</div>;
}
