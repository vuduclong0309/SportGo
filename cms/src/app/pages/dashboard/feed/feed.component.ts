import {Component} from '@angular/core';

import {FeedService} from './feed.service';

import 'style-loader!./feed.scss';

@Component({
  selector: 'feed',
  templateUrl: './feed.html'
})
export class Feed {

  public feed:Array<Object>;
  public reportList:Array<Object>;
  constructor(private _feedService:FeedService) {
  }

  ngOnInit() {
    this._loadFeed();
    this.loadReport();
  }

  expandMessage (message){
    message.expanded = !message.expanded;
  }

  private _loadFeed() {
    this.feed = this._feedService.getData();
  }

  private loadReport() {
    this.reportList = this._feedService.getReportList();
  }
}
