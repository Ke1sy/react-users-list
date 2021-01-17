import React, {FC} from "react";
import {Box} from "@material-ui/core";
import PageTitle from "../../PageTitle/PageTitle";
import {UserType} from "../../../types/types";
import UsersTable from "./UsersTable";
import UsersTopPanel from "./UsersTopPanel";

type UsersType = {
    users: UserType[],
    openCreateUpdateDialog: (value: boolean, user: UserType | null) => void,
    openDeleteDialog: (value: boolean, user: UserType | null) => void,
    usersAreLoading: boolean,
    searchAction: (searchText: string) => void,
    sortKey: "name" | "phone",
    handleSortKeyChange: (event: any) => void
}

const Users: FC<UsersType> = ({users, openCreateUpdateDialog, openDeleteDialog, usersAreLoading, searchAction, sortKey, handleSortKeyChange}) => {
    return (
        <Box>
            <PageTitle text="Members"/>
            <UsersTopPanel
                searchAction={searchAction}
                openCreateUpdateDialog={openCreateUpdateDialog}
            />
            <UsersTable
                users={users}
                openCreateUpdateDialog={openCreateUpdateDialog}
                openDeleteDialog={openDeleteDialog}
                usersAreLoading={usersAreLoading}
                sortKey={sortKey}
                handleSortKeyChange={handleSortKeyChange}
            />

        </Box>
    )
};

export default Users;
