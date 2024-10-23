import { MainApp } from "./constant.router";

export default function useGetDomain() {
    const subDomain = getSubDomain(window.location.hostname);

    const currentDomain = MainApp.find(app => app.main)

    if (!currentDomain || !subDomain) throw new Error("Must have main routers")

    const main = MainApp.find(app => subDomain == app.subdomain)

    let FinalModal;
    if (!main) FinalModal = currentDomain?.app
    else FinalModal = main.app;

    return { FinalModal, main }
}

function getSubDomain(location: string) {
    const locationDomain = location.split(".")

    return locationDomain[0];
}
