import React, { Component } from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// core components
import InputLabel from '@material-ui/core/InputLabel';

const styles = {
    mainHolder: {
        position: 'relative',
        width: 350,
        height: 400,
        minHeight: 200,
        border: '2px solid black',
        borderRadius: 5,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#E8E8E8"
    },
    imageHolder: {
        position: 'absolute',
        top: 0,
        right: 5,
        zIndex: 3
    },
    contentHolder: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center'

    },
    subContentHolder: {
        display: 'flex',
        flexDirection: 'row',

    },
    contentHeader: {
        height: 20,
        width: 150,
        fontWeight: '300',
        fontSize: '15px',
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        textDecoration: 'none',
        //textAlign: 'right',
        color: '#000000'
    },
}
class Usermodel extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        const { classes } = this.props;
        const user = this.props.user;
        return (
                <div key={user.id} className={classes.mainHolder}>
                    <div>
                        <img
                            className={classes.imageHolder}
                            src="/assets/cross.png" height="30" width="30"
                            onClick={() => { this.props.removeCard(user.id) }} />
                    </div>
                    <div>
                        <img src={user._links.avatar.href}
                            alt={user.first_name + " " + user.last_name}
                            height="300"
                            width="100%"
                        />
                    </div>
                    <div className={classes.contentHolder} >
                        <InputLabel className={classes.contentHeader}>Name:{user.first_name}</InputLabel>
                    </div>
                    <div className={classes.subContentHolder}>
                        <InputLabel className={classes.contentHeader}>Gender:{user.gender}</InputLabel>
                    </div>
                    <div className={classes.subContentHolder}>
                        <InputLabel className={classes.contentHeader}>DOB:{user.dob}</InputLabel>
                    </div>
                    <div className={classes.subContentHolder}>
                        <InputLabel className={classes.contentHeader}>Email:{user.email}</InputLabel>
                    </div>
                </div>
        )
    }
}

export default withStyles(styles)(Usermodel);
