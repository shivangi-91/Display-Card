import React, { Component } from 'react';
import { getUser } from '../services/api';
import Usermodel from './Usermodel';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
    mainHolder: {
        marginLeft:"-3%",
        height: 40,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#E8E8E8"
    },
    contentHolder: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 100,
        marginTop: 40

    },
    contentHeader: {
        height: 20,
        fontWeight: '400',
        fontSize: '25px',
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        textDecoration: 'none',
        textAlign: 'center',
        color: '#000000'
    },
}
class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allUser: []
        }
    }


    componentDidMount() {
        getUser()
            .then(data => {
                this.setState({
                    allUser: [...data]
                })
            })
    }



    removeCard = id => {
        const filteredArray = this.state.allUser.filter(ele => {
            if (ele.id != id) {
                return ele
            }
        })
        this.setState({
            allUser: [...filteredArray]
        })
    }


    render() {
        const { classes } = this.props;
        const alluser = this.state.allUser;
        return (
            <div className={classes.mainHolder}>
                <p className={classes.contentHeader}>CARDS DISPLAY</p>
                <div className={classes.contentHolder}>
                    {
                        alluser.map(user => {
                            return (
                                <Usermodel key={user.id} user={user} removeCard={this.removeCard} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}


export default withStyles(styles)(User);