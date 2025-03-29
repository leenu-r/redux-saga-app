import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../utils/userDetailsSlice";
import store from "../utils/store";

const UserDetails = () => {

    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((store) => store.userDetails)


    return (
        <div>
            <h2>User details</h2>
            <button onClick={() => dispatch(getUserDetails())}>Get User Details</button>

            {users.length > 0 ? <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                    </tr>)}
                </tbody>
            </table> : null}


        </div>
    )

}

export default UserDetails;