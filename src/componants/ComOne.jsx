const ComOne = ({ count, onClickHanler }) => {
  const handleClick = () => onClickHanler()

  return (
  <div>
    <p>{count}</p>
    <button onClick={handleClick}>Incremen</button>
  </div>
  )
}

export default ComOne