import { User } from "@auth0/auth0-react/dist/auth-state";

export function isUserAdmin(user: any): boolean {


    let isAdmin = whiteList.some(x => x == user.email);
    console.log(user, isAdmin)
    return isAdmin;
}

const whiteList = ["wastless1597@gmail.com", "anet.Cibulková@gmail.com"]