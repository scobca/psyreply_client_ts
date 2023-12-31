import {PopupErrorDto} from "@/api/dto/popup-error.dto";
import {PopupWarnDto} from "@/api/dto/popup-warn.dto";
import {PopupDto} from "@/api/dto/popup.dto";

export type StorePopupAppDto = {
    popupError: PopupErrorDto,
    popupWarn: PopupWarnDto,
    popup: PopupDto,
}
