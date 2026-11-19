'use strict';

const { defineComponent, h } = require('vue');

const XCircleSmall = defineComponent({
  name: 'XCircleSmall',
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
          h('line', {"x1":"9.999999990879587","y1":"14.000000000806722","x2":"13.999999990699507","y2":"10.000000000986802"}),
          h('line', {"x1":"13.999999990610377","y1":"14.000000000894943","x2":"9.999999990970537","y2":"10.000000000897671"}),
          h('circle', {"cx":"11.999999990790457","cy":"12.000000000897671","r":"10"})
        ]
      );
  }
});

module.exports = XCircleSmall;
module.exports.XCircleSmall = XCircleSmall;
module.exports.default = XCircleSmall;
