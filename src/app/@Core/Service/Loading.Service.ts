import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    private isLoading = new BehaviorSubject < boolean > (false);

    constructor() { }

    showLoader() {
        this.isLoading.next(true);
    }

    hideLoader() {
        this.isLoading.next(false);
    }

    getLoaderState() {
        return this.isLoading.asObservable();
    }
}
