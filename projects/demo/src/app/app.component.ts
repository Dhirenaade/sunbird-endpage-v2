import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'End Page Demo';
  endPageConfig: object;
  contentDetails: object;
  EndPageData: object;

  ngOnInit() {
    this.endPageConfig = {
      showMessage: true,
      showContentInfo: true,
      showClockIcon: true,
      showAuthor: true,
      showReplay: true,
      showExit: true,
      showUser: true
    };

    this.contentDetails = {
      message: 'You Just Completed',
      user: 'Mentor Educator',
      timeLabel: 'TIME',
      contentInfo : 'B301,B302_STD_1_TAMIL,ENGLISH_LANG_TERM 1_OPT',
      clockIcon: '/assets/clock.png',
      author: 'Universal Learning Aid (Let"s Learn)',
      authorLabel: 'Author',
      replayIcon: 'assets/replay.png',
      exitIcon: 'assets/exit.png',
      replayLabel: 'Replay'
    };

    this.EndPageData = {
      eventType: 'END',
      metaData: {
        eid: 'END',
        numberOfPagesVisited: 9,
        totalNumberOfPages: 10,
        currentPagePointer: 10,
        pageDuration: [
          {
            page: 2,
            spentTime: 3663
          },
          {
            page: 3,
            spentTime: 111
          },
          {
            page: 4,
            spentTime: 7534
          },
          {
            page: 5,
            spentTime: 573
          },
          {
            page: 6,
            spentTime: 255
          },
          {
            page: 7,
            spentTime: 475
          },
          {
            page: 8,
            spentTime: 362
          },
          {
            page: 9,
            spentTime: 353
          },
          {
            page: 10,
            spentTime: 301
          }
        ],
        sessionId: '',
        userPlayBehavior: []
      }
    };
  }


  public EndPageEventHandler(valueEmitted) {
    console.log('Telemetry Events:', valueEmitted);
  }

  public EndPageReplayEventHandler(valueEmitted) {
    console.log(valueEmitted);
  }

  public EndPageExitEventHandler(valueEmitted) {
    console.log(valueEmitted);
  }
}
