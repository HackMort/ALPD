import { Fancybox } from "@fancyapps/ui";

class usualSuspectModalInfants {
    usualModalInfants: Fancybox;

    constructor() {
        this.usualModalInfants = undefined;
    }

    open() {
        this.usualModalInfants = new Fancybox(
            [{ src: "usual-supect-modal--infants" }],
            {
                autoFocus: false,
                defaultType: "inline",
                placeFocusBack: false,
                trapFocus: false,
                closeButton: false,
                height: "auto",
            }
        );
    }

    close() {
        this.usualModalInfants.close();
    }
}

class usualSuspectModalAdults {
    usualModalAdults: Fancybox;

    constructor() {
        this.usualModalAdults = undefined;
    }

    open() {
        this.usualModalAdults = new Fancybox(
            [{ src: "usual-supect-modal--adults" }],
            {
                autoFocus: false,
                defaultType: "inline",
                placeFocusBack: false,
                trapFocus: false,
                closeButton: false,
                height: "auto",
            }
        );
    }

    close() {
        this.usualModalAdults.close();
    }
}

export { usualSuspectModalInfants, usualSuspectModalAdults };