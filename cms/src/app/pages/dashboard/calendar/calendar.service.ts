import {Injectable} from '@angular/core';
import {BaThemeConfigProvider} from '../../../theme';

@Injectable()
export class CalendarService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {

    let dashboardColors = this._baConfig.get().colors.dashboard;
    return {
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultDate: Date(), 
      selectable: true,
      selectHelper: true,
      editable: true,
      eventLimit: true,
      events: [
        {
          title: 'New Year\'s Day',
          start: '2017-01-01',
          color: dashboardColors.silverTree
        },
        {
          title: 'Chinese New Year',
          start: '2017-01-28',
          end: '2017-01-29',
          color: dashboardColors.blueStone
        },
        {
          title: 'Good Friday',
          start: '2017-04-14',
          color: dashboardColors.surfieGreen
        },
        {
          title: 'Labour Day',
          start: '2017-05-01',
          color: dashboardColors.gossip
        },
        {
          title: 'Vesak Day',
          start: '2017-05-10',
          color: dashboardColors.silverTree
        },
        {
          title: 'Hari Raya Puasa',
          start: '2017-06-25',
          color: dashboardColors.blueStone
        },
        {
          title: 'National Day',
          start: '2017-08-09',
          color: dashboardColors.surfieGreen
        },
        {
          title: 'Hari Raya Haji',
          start: '2017-09-01',
          color: dashboardColors.gossip
        },
        {
          title: 'Deepavali',
          start: '2017-10-18',
          color: dashboardColors.silverTree
        },
        {
          title: 'Christmas Day',
          start: '2017-12-25',
          color: dashboardColors.surfieGreen
        }
      ]
    };
  }
}
