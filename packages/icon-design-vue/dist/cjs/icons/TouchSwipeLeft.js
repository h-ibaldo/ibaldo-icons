'use strict';

const { defineComponent, h } = require('vue');

const TouchSwipeLeft = defineComponent({
  name: 'TouchSwipeLeft',
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
          h('polyline', {"points":"7.025268549024986 14.99878273937793 4.025268549155953 11.998782739243325 7.02526854928692 8.99878273937793"}),
          h('line', {"x1":"12.025268549155953","y1":"11.998782739603485","x2":"4.025268549155953","y2":"11.998782739243325"}),
          h('circle', {"cx":"16.025268549153679","cy":"11.998782739781745","r":"3.999999999998863"})
        ]
      );
  }
});

module.exports = TouchSwipeLeft;
module.exports.TouchSwipeLeft = TouchSwipeLeft;
module.exports.default = TouchSwipeLeft;
