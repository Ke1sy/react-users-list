import React, {FC, useEffect, useState} from "react";
import Users from "./Users/Users";
import {connect} from 'react-redux'
import {AppStateType} from "../../redux/store";
import {fakeAddUser, fakeDeleteUser, fakeEditUser, loadUsers} from "../../redux/reducers/users-reducer";
import {UserType} from "../../types/types";
import {getUsers, getUsersAreLoading} from "../../redux/reducers/user-selectors";
import EditDialog from "../Dialogs/EditDialog";
import DeleteDialog from "../Dialogs/DeleteDialog";
import {v4 as uuidv4} from 'uuid';

type MapStatePropsType = {
    usersAreLoading: boolean
    users: UserType[]
}

type MapDispatchPropsType = {
    loadUsers: () => void
    fakeDeleteUser: (id: string | number) => void
    fakeAddUser: (user: UserType) => void
    fakeEditUser: (user: UserType) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

type FormDataType = {
    id: null | number | string,
    name: string,
    email: string,
    phone: string,
    website: string,
}

const UsersContainer: FC<PropsType> = ({users, usersAreLoading, loadUsers, fakeAddUser, fakeDeleteUser, fakeEditUser}) => {
    const [searchText, setSearchText] = useState('');
    const [editDialogIsOpen, setEditDialogIsOpen] = useState(false);
    const [deleteDialogIsOpen, setDeleteDialogIsOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<null | UserType>(null);
    const [filteredUsers, setFilteredUsers] = useState<UserType[]>(users);
    const [sortKey, setSortKey] = useState<'name' | 'phone'>('name');

    useEffect(() => {
        loadUsers()
    }, []);

    useEffect(() => {
        filterUsers()
    }, [users, searchText, sortKey]);

    const filterUsers = () => {
        const searchTextVal = searchText.trim().toLowerCase();

        //search matches
        const matches = users.filter(({name, website, email, phone}) => {
            return name.trim().toLowerCase().includes(searchTextVal) ||
                email.trim().toLowerCase().includes(searchTextVal) ||
                phone.trim().toLowerCase().includes(searchTextVal) ||
                website.trim().toLowerCase().includes(searchTextVal);
        });

        //order by sortKey
        setFilteredUsers(matches.sort((a, b) => (a[sortKey] > b[sortKey]) ? 1 : ((b[sortKey] > a[sortKey]) ? -1 : 0)))
    };


    const onDeleteUser = (id: string | number) => {
        console.log('delete user');
        fakeDeleteUser(id);
        setDeleteDialogIsOpen(false)
    };

    const addUser = (user: FormDataType) => {
        console.log('add user');
        fakeAddUser({...user, id: uuidv4()})
    };

    const editUser = (user: FormDataType) => {
        console.log('edit user');
        fakeEditUser({...user, id: user.id || uuidv4()})
    };

    const createUpdateUser = (formData: FormDataType, type: 'add' | 'edit') => {
        switch (type) {
            case 'add':
                addUser(formData);
                break;
            case 'edit':
                editUser(formData);
                break;
            default:
                return false
        }
    };

    const openCreateUpdateDialog = (value: boolean, user: UserType | null) => {
        setSelectedUser(user);
        setEditDialogIsOpen(value);
    };

    const openDeleteDialog = (value: boolean, user: UserType | null) => {
        setSelectedUser(user);
        setDeleteDialogIsOpen(value);
    };


    const onChangeSearchText = (searchText: string) => {
        setSearchText(searchText)
    };

    const handleSortKeyChange = (event: any) => {
        setSortKey(event.target.value);
    };


    return (
        <>

            <Users
                users={filteredUsers}
                openCreateUpdateDialog={openCreateUpdateDialog}
                openDeleteDialog={openDeleteDialog}
                usersAreLoading={usersAreLoading}
                searchAction={onChangeSearchText}
                sortKey={sortKey}
                handleSortKeyChange={handleSortKeyChange}
            />

            <EditDialog
                createUpdateUser={createUpdateUser}
                isOpen={editDialogIsOpen}
                user={selectedUser}
                openCreateUpdateDialog={openCreateUpdateDialog}
            />

            <DeleteDialog
                isOpen={deleteDialogIsOpen}
                setIsOpen={openDeleteDialog}
                deleteAction={onDeleteUser}
                itemToDelete={selectedUser}
            />
        </>
    )
};

const mapStateToProps = (state: AppStateType) => {
    return {
        users: getUsers(state),
        usersAreLoading: getUsersAreLoading(state),
    }
};

export default connect(mapStateToProps, {
    loadUsers,
    fakeEditUser,
    fakeDeleteUser,
    fakeAddUser,
})(UsersContainer)
