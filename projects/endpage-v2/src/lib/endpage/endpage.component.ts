import { Component, OnInit, Output, Input, EventEmitter, OnDestroy } from '@angular/core';

import { EndPageEvent } from './endPageEvents';

@Component({
  selector: 'sb-lib-endpage',
  templateUrl: './endpage.component.html',
  styleUrls: ['./endpage.component.css']
})
export class EndPageComponent implements OnInit {
   // Import and export for end-page Library
   @Input() endPageConfig: object;
   @Input() contentDetails: object;
   @Input() pdfEndData: object;
   // Output from EndPage
   @Output() sendMetadata: EventEmitter<object> = new EventEmitter<EndPageEvent>();

   TotalTimeConsumed: number;
   telemetryEventObject: EndPageEvent;
   userName: any;

  constructor() { }

  ngOnInit() {
    this.setEndPageEvent('END');
  }

  setEndPageEvent( eid: string ) {
    this.sendMetadata.emit(this.telemetryEventObject);
  }

  replay(): void {

  }

  exit(): void {

  }

}
