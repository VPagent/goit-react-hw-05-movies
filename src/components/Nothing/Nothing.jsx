import s from '../Nothing/nothing.module.scss'

const Nothing = () => {
    return(
        <div className={s.nothingBox}>
            <p className={s.errorText}>We dont have any rewiews for this movie</p>
        </div>
    )
}
export default Nothing