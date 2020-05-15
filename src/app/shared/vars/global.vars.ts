import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GlobalVars {

    public lat: number = 32.045;
    public lng: number = 34.77;

    public isCelsius: boolean = false;

    public isAuthorized: boolean = false;
}