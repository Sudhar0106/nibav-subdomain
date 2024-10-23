import { EliteRouters, MainRouters, NibavRouters } from "../routers";

export const MainApp=[
    {
        subdomain : "localhost",
        app: MainRouters,
        main : true,
    },
    {
        subdomain : "nibav",
        app: NibavRouters,
        main : false,
    },
    {
        subdomain : "elite",
        app: EliteRouters,
        main : false,
    },
]



