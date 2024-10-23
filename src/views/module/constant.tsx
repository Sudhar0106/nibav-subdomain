export type SearchParams = {
    name: string,
    value: string,
    type: string
}

export interface headerType {
    headerName: any;
    handleSearch: ({ name, value }: SearchParams) => void,
}

export const DeliveryType = [{ value: "All", option: "All" }, { value: "standard", option: "Standard" }, { value: "fastDelivery", option: "Fast" }]
export const ItemStatus = [
    { value: "All", option: "All" },
    { value: "approved", option: "Approved" },
    { value: "rejected", option: "Rejected" },
    { value: "processing", option: "Processing" }
]

export interface defaultTypes {
    "orderId": number,
    "customerName": string,
    "model": string,
    "floor": number,
    "deliveryType":string,
    "shortUrl":string,
    "mainStage":string,
    "status":string,
}

export interface PaginationTypes{
    page:number,
    rowsPerpage:number,
    totalCount:number
}