import s from '../Nothing/nothing.module.scss'

const Nothing = ({text}) => {
    return(
        <div className={s.nothingBox}>
            <p className={s.errorText}>We dont have any {text} for this movie</p>
        </div>
    )
}
export default Nothing