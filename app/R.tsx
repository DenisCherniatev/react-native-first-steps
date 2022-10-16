import { localize } from "./i18n/i18n";
import { images } from "./assets/images";
import { colors, fonts, hitSlop } from "./assets/styles";

const strings = {
    get yes() { return localize("Yes") },
    get no() { return localize("No") },
    get english() { return localize("english") },
    get spanish() { return localize("spanish") },
};

const R = {
    strings,
    images,
    styles: {colors, fonts, hitSlop,},
};

export default R;