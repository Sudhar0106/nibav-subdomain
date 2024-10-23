import { MainApp } from "./constant.router";

export default function useGetDomain() {
    const subDomain = getSubDomain(window.location.hostname);
    const currentDomain = MainApp.find(app => app.main);

    if (!currentDomain || !subDomain) {
        throw new Error("Must have main routers");
    }

    const main = MainApp.find(app => app.subdomain === subDomain);
    const FinalModal = main?.app || currentDomain.app;

    console.log(main)
    return { FinalModal, main };
}

function getSubDomain(location: string) {
    return location.split(".")[0];
}
