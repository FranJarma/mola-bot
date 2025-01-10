import { Injectable } from '@nestjs/common';

@Injectable()
export class DateService {
    getCurrentDate(): Date {
        return new Date();
    }
    
    getCurrentDateFormatted(): string {
        return this.getCurrentDate().toLocaleDateString();
    }
    
    getCurrentTimeFormatted(): string {
        return this.getCurrentDate().toLocaleTimeString();
    }
    
    getCurrentDateTimeFormatted(): string {
        return this.getCurrentDate().toLocaleString();
    }
}
