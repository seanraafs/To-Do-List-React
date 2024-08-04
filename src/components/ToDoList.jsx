function toDoList() {
  return (
    <div className="wrapper">
      <ul>
        <li>
          <div className="left">
            <button>✅</button>
          </div>
          <div className="center">bbb</div>
          <div className="right">
            <span>
              <button>👆</button>
            </span>
            <span>
              <button>👇</button>
            </span>
            <span>
              <button>🗑️</button>
            </span>
          </div>
        </li>
        <li>
          <div className="left">
            <button>◻️</button>
          </div>
          <div className="center">aaa</div>
          <div className="right">
            <span>
              <button>👆</button>
            </span>
            <span>
              <button>👇</button>
            </span>
            <span>
              <button>🗑️</button>
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default toDoList;
