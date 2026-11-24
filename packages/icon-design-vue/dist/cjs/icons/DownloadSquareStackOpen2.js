'use strict';

const { defineComponent, h } = require('vue');

const DownloadSquareStackOpen2 = defineComponent({
  name: 'DownloadSquareStackOpen2',
  props: {
    size: { type: [Number, String], default: 24 },
    color: { type: String, default: 'currentColor' },
    strokeWidth: { type: [Number, String], default: 1.5 }
  },
  setup(props) {
    return () =>
      h(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: props.size,
          height: props.size,
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: props.color,
          'stroke-width': props.strokeWidth,
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          class: 'icon-design'
        },
        [
          h('path', {"d":"M14.974731450030959,5.000000000462023c1.656854249490607,0,3,1.343145750503936,3,3v7c0,1.656854249490607-1.343145750509393,3-3,3H4.974731450030959c-1.656854249496064,0-3-1.343145750509393-3-3v-7c0-1.656854249496064,1.343145750503936-3,3-3"}),
          h('path', {"d":"M5.974731450030959,18.000000000462023v1c0,1.656854249490607,1.343145750503936,3.000000000000909,3,3.000000000000909h10c1.656854249490607,0,3-1.343145750510303,3-3.000000000000909v-7c0-1.656854249496064-1.343145750511212-3-3-3h-1"}),
          h('polyline', {"points":"12.974731450030959 10.000000000462023 9.974731449356113 13.000000000462023 6.974731450030959 10.000000000462023"}),
          h('line', {"x1":"9.974731451105981","y1":"2.000000000462023","x2":"9.974731449356113","y2":"13.000000000462023"})
        ]
      );
  }
});

module.exports = DownloadSquareStackOpen2;
module.exports.DownloadSquareStackOpen2 = DownloadSquareStackOpen2;
module.exports.default = DownloadSquareStackOpen2;
