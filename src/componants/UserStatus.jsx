import React from 'react'

const UserStatus = (props) => {

    if (props.LoggedIn && props.isAdmin) {
        return <h1>Welcome Admin</h1>
    } else {
        return <h1>Wellcome user</h1>
    }

}

export default UserStatus