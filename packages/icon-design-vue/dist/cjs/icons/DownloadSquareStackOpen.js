'use strict';

const { defineComponent, h } = require('vue');

const DownloadSquareStackOpen = defineComponent({
  name: 'DownloadSquareStackOpen',
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
          h('path', {"d":"M12.974731450026411,4.000000000462023c1.656854249493335,0,3,1.343145750503936,3,3v7c0,1.656854249490607-1.343145750506665,3-3,3H4.974731450026411c-1.656854249492426,0-3-1.343145750509393-3-3v-7c0-1.656854249496064,1.343145750507574-3,3-3"}),
          h('path', {"d":"M7.974731450026411,17.000000000462023v2c0,1.656854249490607,1.343145750507574,3.000000000000909,3,3.000000000000909h8c1.656854249493335,0,3-1.343145750510303,3-3.000000000000909v-7c0-1.656854249496064-1.343145750509393-3-3-3h-3"}),
          h('polyline', {"points":"11.974731450026411 9.000000000462023 8.974731449353385 12.000000000462023 5.974731450026411 9.000000000462023"}),
          h('line', {"x1":"8.974731451103253","y1":"2.000000000462023","x2":"8.974731449353385","y2":"12.000000000462023"})
        ]
      );
  }
});

module.exports = DownloadSquareStackOpen;
module.exports.DownloadSquareStackOpen = DownloadSquareStackOpen;
module.exports.default = DownloadSquareStackOpen;
