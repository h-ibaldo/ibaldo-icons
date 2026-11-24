'use strict';

const { defineComponent, h } = require('vue');

const PollHorizontalCheckX = defineComponent({
  name: 'PollHorizontalCheckX',
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
          h('polyline', {"points":"2.025268534409406 1.99999999883039 13.025268534409406 1.99999999883039 13.025268534409406 5.99999999883039 2.025268534409406 5.99999999883039"}),
          h('polyline', {"points":"2.025268534409406 9.99999999883039 6.025268534409406 9.99999999883039 6.025268534409406 13.99999999883039 2.025268534409406 13.99999999883039"}),
          h('polyline', {"points":"2.025268534409406 17.99999999883039 10.025268534409406 17.99999999883039 10.025268534409406 21.99999999883039 2.025268534409406 21.99999999883039"}),
          h('polyline', {"points":"17.025268534409406 2.99999999883039 19.025268534409406 4.99999999883039 22.025268534409406 1.99999999883039"}),
          h('line', {"x1":"10.025268534409406","y1":"13.99999999883039","x2":"14.025268534409406","y2":"9.99999999883039"}),
          h('line', {"x1":"10.025268534409406","y1":"9.99999999883039","x2":"14.025268534409406","y2":"13.99999999883039"}),
          h('line', {"x1":"14.025268534409406","y1":"21.99999999883039","x2":"18.025268534409406","y2":"17.99999999883039"}),
          h('line', {"x1":"14.025268534409406","y1":"17.99999999883039","x2":"18.025268534409406","y2":"21.99999999883039"})
        ]
      );
  }
});

module.exports = PollHorizontalCheckX;
module.exports.PollHorizontalCheckX = PollHorizontalCheckX;
module.exports.default = PollHorizontalCheckX;
