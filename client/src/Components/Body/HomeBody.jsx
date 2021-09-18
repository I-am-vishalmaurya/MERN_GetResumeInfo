import { Fragment } from 'react'
import classes from './HomeBody.module.css'
const HomeBody = props => {
    return (
        <Fragment>
            <div className={classes["home-div"]}>
                <div className={classes["home-content"]}>
                <div className={classes['column-one']}>
                    <p className={classes.text}> WELCOME</p>
                </div>
                <div className={classes['column-two']}>
                    <h1 className={classes.text}>Just Getting Started with Full Stack Development</h1>
                </div>
                </div>
               
            </div>
        </Fragment>
    )
}

export default HomeBody