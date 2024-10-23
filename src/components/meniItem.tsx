import { LayoutGrid, Table } from "lucide-react";

export const MenuItem = [
    {
        event: "Dashboard",
        title: "Dashboard",
        icon: <LayoutGrid size={20} />,
        path: "/pages/dashboard",
        Children: []
    },
    {
        event: "Table",
        title: "Table",
        icon: <Table size={20} />,
        path: "/pages/table",
        Children: []
    },
    {
        event: "MRT Table",
        title: "MRT Table",
        icon: <Table size={20} />,
        path: "/pages/mrt-table",
        Children: []
    }
]