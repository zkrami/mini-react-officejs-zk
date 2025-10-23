export enum PlatformType {
    PC = 'PC',
    OfficeOnline = 'OfficeOnline',
    Mac = 'Mac',
    iOS = 'iOS',
    Android = 'Android',
    Universal = 'Universal',
}

//tslint:disable
export function getPlatform(): PlatformType {
    console.log("Office.onReady getPlatform")
    return (((window as any).Office &&
        (window as any).Office.context &&
        (window as any).Office.context.platform) ||
        PlatformType.OfficeOnline) as PlatformType;
}
//tslint:enable
