'use strict';

const { defineComponent, h } = require('vue');

const NodesFork = defineComponent({
  name: 'NodesFork',
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
          h('circle', {"cx":"4","cy":"11.999999999998181","r":"2"}),
          h('line', {"x1":"6","y1":"11.999999999998181","x2":"13","y2":"11.999999999998181"}),
          h('circle', {"cx":"20","cy":"3.999999999998181","r":"2"}),
          h('circle', {"cx":"20","cy":"19.999999999998181","r":"2"}),
          h('polyline', {"points":"18.6884765625 5.498901367188409 13 11.999999999998181 18.6884765625 18.501098632808862"})
        ]
      );
  }
});

module.exports = NodesFork;
module.exports.NodesFork = NodesFork;
module.exports.default = NodesFork;
