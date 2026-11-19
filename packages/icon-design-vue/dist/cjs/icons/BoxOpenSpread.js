'use strict';

const { defineComponent, h } = require('vue');

const BoxOpenSpread = defineComponent({
  name: 'BoxOpenSpread',
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
          h('polyline', {"points":"1.999999999909051 9.999999999998181 15.999999999909051 2.999999999998181 21.99999999991087 5.999999999998181"}),
          h('polyline', {"points":"21.999999999909051 5.999999999998181 7.999999999909051 12.999999999998181 1.999999999907232 9.999999999998181"}),
          h('polyline', {"points":"21.999999999998181 9.999999999548891 7.999999999683496 3.000000000178261 1.999999999818101 6.000000000447471"}),
          h('polyline', {"points":"1.99999999981992 6.000000000447471 16.000000000132786 12.999999999818101 22 9.999999999548891"}),
          h('polyline', {"points":"5.999999999818101 11.999999999998181 5.999999999818101 17.999999999998181 11.999999999818101 20.999999999998181 17.999999999818101 17.999999999998181 17.999999999818101 11.999999999998181"}),
          h('line', {"x1":"11.99999999981992","y1":"10.999999999998181","x2":"11.99999999981992","y2":"20.999999999998181"})
        ]
      );
  }
});

module.exports = BoxOpenSpread;
module.exports.BoxOpenSpread = BoxOpenSpread;
module.exports.default = BoxOpenSpread;
