import { User } from "@auth0/auth0-react/dist/auth-state";

export function isUserAdmin(user: User| undefined):boolean{
    return whiteList.some(x => x==user.email);
}

const whiteList= ["wastless1597@gmail.com", "anet.Cibulková@gmail.com"]