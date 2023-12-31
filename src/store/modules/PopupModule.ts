import {StorePopupAppDto} from "@/api/dto/store-popup-app.dto";

interface PopupModuleState {
    popupApp: StorePopupAppDto | null
}


export const PopupModule = {
    state: (): PopupModuleState => ({
        popupApp: {
            popupError: {
                show: false,
                message: null
            },
            popupWarn: {
                show: false,
                message: null,
                acceptCallback: null
            },
            popup: {
                show: false,
                message: null
            }
        }
    }),
    getters: {
        popup(state: any) {
            return state.popupApp.popup;
        },
        popupWarn(state: any) {
            return state.popupApp.popupWarn;
        },
        popupError(state: any) {
            return state.popupApp.popupError;
        }
    },
    mutations: {
        openErrorPopup(state: any, message: string) {
            const popupError = state.popupApp.popupError

            popupError.show = true;
            popupError.message = message;
        },
        closeErrorPopup(state: any) {
            const popupError = state.popupApp.popupError

            popupError.show = false;
            popupError.message = null;
        },
        openWarnPopup(state: any, body: {message: string, acceptCallback: any}) {
            const popupWarn = state.popupApp.popupWarn

            popupWarn.show = true;
            popupWarn.message = body.message;
            popupWarn.acceptCallback = body.acceptCallback;
        },
        acceptWarnPopup(state: any) {
            const popupWarn = state.popupApp.popupWarn

            popupWarn.acceptCallback();
        },
        closeWarnPopup(state: any) {
            const popupWarn = state.popupApp.popupWarn

            popupWarn.show = false;
            popupWarn.message = null;
        },
        openPopup(state: any, message: string) {
            const popup = state.popupApp.popup

            popup.show = true;
            popup.message = message;
            setTimeout(() => {
                popup.show = false;
                popup.message = null
            }, 3000)
        },
    },
    actions: {},
}
