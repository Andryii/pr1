import React from 'react';

const PostItem = () => {
    return (
        <div className="post">
        <div className="post__content">
          <strong>1. Javascript</strong>
          <div>
            Javascript - это языкпрограмирования
          </div>

        </div>
        <div className="post__btns">
          <button>Удалить</button>
        </div>
      </div>
    );
};

export default PostItem;