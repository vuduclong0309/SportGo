import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class PieChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {
    let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
      {
        color: pieColor,
        description: 'New Visits',
        stats: '230',
        icon: 'person',
      }, {
        color: pieColor,
        description: 'Active Users',
        stats: '70',
        icon: 'face',
      }, {
        color: pieColor,
        description: 'Hazes',
        stats: '40',
        icon: 'refresh',
      }, {
        color: pieColor,
        description: 'Dengues',
        stats: '23',
        icon: 'refresh',
      }
    ];
  }
}
