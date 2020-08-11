import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { EndPageEvent, ContentDetails, EndPageConfig, EndPageData, EndData } from './endPageEvents';

@Component({
  selector: 'sb-lib-endpage',
  templateUrl: './endpage.component.html',
  styleUrls: ['./endpage.component.css']
})
export class EndPageComponent implements OnInit {
   // Import and export for end-page Library
   @Input() endPageConfig: EndPageConfig;
   @Input() contentDetails: ContentDetails;
   @Input() EndPageData: EndPageData;
   // Output from EndPage
   @Output() sendMetadata: EventEmitter<object> = new EventEmitter<EndPageEvent>();
   @Output() replayEvent: EventEmitter<string> = new EventEmitter<string>();
   @Output() exitEvent: EventEmitter<string> = new EventEmitter<string>();

   TotalTimeConsumed = 0;
   TotalTimeConsumedInHours = '';
   TelemetryEventObject = { edata: {} as EndData } as EndPageEvent;

  constructor() { }

  ngOnInit() {
    this.getTimeSpent();
    this.setEndPageEvent('END');
  }

  setEndPageEvent( eid: string ) {
    this.TelemetryEventObject.eid = eid;
    this.TelemetryEventObject.edata.duration = this.TotalTimeConsumedInHours;
    this.TelemetryEventObject.edata.pageid = this.EndPageData.metaData.currentPagePointer;
    this.TelemetryEventObject.edata.totalPages = this.EndPageData.metaData.totalNumberOfPages;
    this.TelemetryEventObject.edata.summary = this.EndPageData.metaData.pageDuration;
    this.sendMetadata.emit(this.TelemetryEventObject);
  }

  getTimeSpent() {
    for ( const eachPageTime of this.EndPageData.metaData.pageDuration) {
      this.TotalTimeConsumed += (eachPageTime['spentTime']);
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

  exit(action): void {
    this.exitEvent.emit(action);
  }
}
