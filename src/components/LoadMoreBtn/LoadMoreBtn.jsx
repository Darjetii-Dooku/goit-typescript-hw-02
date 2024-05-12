import css from './LoadMoreBtn.module.css'
const LoadMoreBtn = ({ setPage }) => {

  const handleClick = () => {
    setPage(prevPage => prevPage + 1)}
  return (
    <div>
      <button className={css.button} type="button" onClick={handleClick}>Load more</button>
    </div>
  )
}

export default LoadMoreBtn