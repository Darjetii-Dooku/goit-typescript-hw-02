import css from './Loader.module.css'
const Loader = () => {
    return (
        <div className={css.card}>
            <div className={css.image}></div>
            <div className={css.info}>
                <h2 className={css.title}></h2>
            </div>
        </div>
    )}

export default Loader