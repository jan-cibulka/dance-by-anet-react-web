export function isUserAdmin(userEmail: string):boolean{
    return whiteList.some(x => x==userEmail);
}

const whiteList= ["wastless1597@gmail.com", "anet.Cibulková@gmail.com"]