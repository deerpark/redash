import template from './visual-query-form.html';

const DEFAULT_TAB = 'segment';

export default function init(ngModule) {
  ngModule.component('visualQueryForm', {
    template,
    bindings: {
      canEdit: '=',
      sourceMode: '=',
    },
    controller($scope) {
      'ngInject';

      this.events = [
        {
          id: 0,
          name: '<b>Click</b> Product',
          value: 'clickProduct',
        },
        {
          id: 1,
          name: 'View Product',
          value: 'viewProduct',
        },
      ];
      this.userProperties = [
        {
          id: 0,
          name: 'Carrier',
          value: 'carrier',
          values: ['SK Telecom', 'KT', 'LGU Plus'],
        },
        {
          id: 1,
          name: 'City',
          value: 'city',
          values: ['Seoul', 'Busan', 'Incheon'],
        },
        {
          id: 2,
          name: 'Country',
          value: 'country',
          values: ['Korea', 'Japan', 'Vietnam'],
        },
      ];
      this.equals = [
        {
          id: 0,
          name: '= (is)',
          value: '=',
        },
        {
          id: 1,
          name: '≠  (is not)',
          value: '≠',
        },
      ];

      this.segments = [
        {
          order: 'A',
          event: 'clickProduct',
          where: [
            {
              id: 0,
              property: 'carrier',
              equal: '=',
              value: ['SKTelecom'],
            },
          ],
          groupBy: ['carrier', 'city'],
        },
      ];

      $scope.selectedTab = DEFAULT_TAB;

      /**
       * 세그먼트 생성
       */
      this.createSegment = () => {
        const { order } = this.segments.length ? this.segments.slice(-1)[0] : { order: null };
        const newOrder = order ? String.fromCharCode(order.charCodeAt() + 1) : 'A';
        return {
          order: newOrder,
          event: null,
          where: [],
          groupBy: [],
        };
      };

      /**
       * 세그먼트 where 생성
       * @param  {Number} index
       */
      this.createSegmentWhere = (index) => {
        const { id } = this.segments[index].where.length ? this.segments[index].where.slice(-1)[0] : { id: -1 };
        const where = {
          id: id + 1,
          property: null,
          equal: null,
          value: [],
        };
        this.segments[index].where.push(where);
      };

      /**
       * 세그먼트 생성
       */
      this.addSegment = () => {
        this.segments.push(this.createSegment());
      };

      this.removeSegment = (index) => {
        this.segments.splice(index, 1);
      };
    },
  });
}

init.init = true;
