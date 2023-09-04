import {DeviceSize} from "@/types/deivce.types";

const deviceSize: DeviceSize = {
    xs: '400px', // for small screen mobile
    sm: '600px', // for mobile screen
    md: '960px', // for tablets
    lg: '1280px', // for laptops
    xl: '1440px', // for desktop / monitors
    xxl: '1920px', // for big screens
}

export const devices = {
    xs: `(min-width: ${deviceSize.xs})`,
    sm: `(min-width: ${deviceSize.sm})`,
    md: `(min-width: ${deviceSize.md})`,
    lg: `(min-width: ${deviceSize.lg})`,
    xl: `(min-width: ${deviceSize.xl})`,
    xxl: `(min-width: ${deviceSize.xxl})`,
}