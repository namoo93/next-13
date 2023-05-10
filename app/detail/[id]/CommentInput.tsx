'use client';
import React, { useState } from 'react';

export default function CommentInput(props: { params: { id: string; user: string } }) {
  let [comment, setComment] = useState('');
  // console.log('id', props.params.id);
  // console.log('user', props.params.user);

  return (
    <form
      action='/api/post/comment'
      method='POST'>
      <label>댓글 등록</label>
      <input
        type='text'
        name='comment'
        placeholder='comment...'
        onChange={(e) => setComment(e.target.value)}
      />
      <input
        style={{ display: 'none' }}
        name='parent'
        value={props.params.id}
      />
      <input
        style={{ display: 'none' }}
        name='author'
        value={props.params.user}
      />
      <button type='submit'>댓글전송</button>
    </form>
  );
}
