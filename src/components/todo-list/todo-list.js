import React from "react";
import "./todo-list.css";

const TodoList = props => {
  let { items, removeItem } = props;
  let list = items.length ? (
    items.map(item => {
      return (
        <div key={item.id}>
          <span>{item.name}</span>
          <span>{item.age}</span>
          <span onClick={() => removeItem(item.id)} className="action">
            &times;
          </span>
        </div>
      );
    })
  ) : (
    <p className="no-item"> No items to display</p>
  );
  return (
    <div className="list">
      <div className="head">
        <span>Name</span>
        <span>Age</span>
        <span>Action</span>
      </div>
      {list}
    </div>
  );
};

export default TodoList;
