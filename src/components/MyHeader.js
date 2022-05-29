const MyHeader = ({ headText, leftChild, rigthChild }) => {
  return (
    <header>
      <div className="head_btn_left">{leftChild}</div>
      <div className="head_text">{headText}</div>
      <div className="head_btn_right">{rigthChild}</div>
    </header>
  );
};

export default MyHeader;
