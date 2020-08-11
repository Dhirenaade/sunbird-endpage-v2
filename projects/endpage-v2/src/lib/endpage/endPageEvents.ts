export interface EndPageEvent {
    eid: string;
    ets: number;
    ver: string;
    mid: string;
    tags: Array<string>;
    edata: EndData | any;
}

export interface EndData {
    type: string;
    mode: string;
    pageid: string;
    summary: Array<object>;
    duration: number;
}

export interface EndPageConfig {
    showMessage: boolean;
      showContentInfo: boolean;
      showClockIcon: boolean;
      showAuthor: boolean;
      showReplay: boolean;
      showExit: boolean;
      showUser: boolean;
}

export interface ContentDetails {
    message: string;
    clockIcon: string;
    author: string;
    replayIcon: string;
    exitIcon: string;
    timeLabel: string;
    contentInfo: string;
    authorLabel: string;
    replayLabel: string;
    exitLabel: string;
    user: string;
}





export interface PdfEndData {

    eventType: string;
      metaData: {
        eid: PdfEndData
        numberOfPagesVisited: number;
        totalNumberOfPages: number;
        currentPagePointer: number;
        pageDuration: Array<object>,
        sessionId: string;
        userPlayBehavior: Array<string>;
    };
}
