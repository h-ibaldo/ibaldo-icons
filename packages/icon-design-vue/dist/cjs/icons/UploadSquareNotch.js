'use strict';

const { defineComponent, h } = require('vue');

const UploadSquareNotch = defineComponent({
  name: 'UploadSquareNotch',
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
          h('polyline', {"points":"15.000000005029506 13.000000026766429 11.999999978339474 10.000000000462023 9.000000005029506 13.000000026766429"}),
          h('line', {"x1":"11.999999978339474","y1":"17.000000026767339","x2":"11.999999978339474","y2":"10.000000000462023"}),
          h('path', {"d":"M15.000000005029506,2.000000000459295c0,1.6568603515625-1.343139648430224,3-3,3-1.656860351558862,0-3-1.3431396484375-3-3H3.000000005029506c-.552284749830505,0-1,.447715250171314-1,1v18c0,.552284749832324.447715250169495,1,1,1h18c.552284749841419,0,1-.447715250167676,1-1V3.000000000459295c0-.552284749828686-.447715250158581-1-1-1h-6Z"})
        ]
      );
  }
});

module.exports = UploadSquareNotch;
module.exports.UploadSquareNotch = UploadSquareNotch;
module.exports.default = UploadSquareNotch;
