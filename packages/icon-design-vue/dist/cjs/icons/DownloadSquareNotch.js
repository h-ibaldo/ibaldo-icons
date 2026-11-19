'use strict';

const { defineComponent, h } = require('vue');

const DownloadSquareNotch = defineComponent({
  name: 'DownloadSquareNotch',
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
          h('polyline', {"points":"9.000000004989488 14.000000000193722 12.000000031399395 17.000000026769158 15.000000004989488 14.000000000732143"}),
          h('line', {"x1":"12.000000032030584","y1":"10.000000000462933","x2":"12.000000031399395","y2":"17.000000026769158"}),
          h('path', {"d":"M15.000000005029506,2.000000000459295c0,1.6568603515625-1.343139648430224,3-3,3-1.656860351558862,0-3-1.3431396484375-3-3H3.000000005029506c-.552284749830505,0-1,.447715250171314-1,1v18c0,.552284749832324.447715250169495,1,1,1h18c.552284749841419,0,1-.447715250167676,1-1V3.000000000459295c0-.552284749828686-.447715250158581-1-1-1h-6Z"})
        ]
      );
  }
});

module.exports = DownloadSquareNotch;
module.exports.DownloadSquareNotch = DownloadSquareNotch;
module.exports.default = DownloadSquareNotch;
