export interface EndPageEvent {
    eid: string;
    ets: number;
    ver: string;
    mid: string;
    tags: Array<string>;
    edata: EndData;
}

export interface EndData {
    type: string;
    mode: string;
    pageid?: number;
    totalPages?: number;
    summary?: Array<object>;
    duration?: string;
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
export interface EndPageData {
    eventType: string;
      metaData: {
        eid: string;
        numberOfPagesVisited: number;
        totalNumberOfPages: number;
        currentPagePointer: number;
        pageDuration: Array<object>,
        sessionId: string;
        userPlayBehavior: Array<string>;
    };
}
