import { Component, OnInit, Output, Input, EventEmitter, OnDestroy } from '@angular/core';

import { EndPageEvent, ContentDetails, EndPageConfig } from './endPageEvents';

@Component({
  selector: 'sb-lib-endpage',
  templateUrl: './endpage.component.html',
  styleUrls: ['./endpage.component.css']
})
export class EndPageComponent implements OnInit {
   // Import and export for end-page Library
   @Input() endPageConfig: EndPageConfig;
   @Input() contentDetails: ContentDetails;
   @Input() pdfEndData: object | any;
   // Output from EndPage
   @Output() sendMetadata: EventEmitter<object> = new EventEmitter<EndPageEvent>();
   @Output() replayEvent: EventEmitter<string> = new EventEmitter<string>();
   @Output() exitEvent: EventEmitter<string> = new EventEmitter<string>();

   TotalTimeConsumed = 0;
   TotalTimeConsumedInHours = '';
   TelemetryEventObject: EndPageEvent;
   userName: any;

  constructor() { }

  ngOnInit() {
    this.getTimeSpent();
    this.setEndPageEvent('END');
  }

  setEndPageEvent( eid: string ) {
    this.sendMetadata.emit(this.TelemetryEventObject);
  }

  getTimeSpent() {
    console.log(this.pdfEndData);
    for ( const eachPageTime of this.pdfEndData['metaData']['pageDuration']) {
      this.TotalTimeConsumed += (eachPageTime.spentTime);
    }
   this.TotalTimeConsumedInHours = this.convertMilisecondToMinutes(this.TotalTimeConsumed);
  }

  convertMilisecondToMinutes( duration: number) {
    const seconds = Math.floor((duration / 1000) % 60);
    const minutes = Math.floor(((duration / (1000 * 60 ) ) % 60));
    const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    return hours + ':' + minutes + ':' + seconds;
  }

  replay(action): void {
    this.replayEvent.emit(action);

  }

  exit(): void {
    this.replayEvent.emit('exit');
  }

}