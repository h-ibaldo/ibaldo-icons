'use strict';

const { defineComponent, h } = require('vue');

const NodesTriangle = defineComponent({
  name: 'NodesTriangle',
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
          h('circle', {"cx":"5","cy":"11.999999999998181","r":"2"}),
          h('circle', {"cx":"19","cy":"3.999999999998181","r":"2"}),
          h('circle', {"cx":"19","cy":"19.999999999998181","r":"2"}),
          h('line', {"x1":"17.27099609375","y1":"4.988037109367724","x2":"6.72900390625","y2":"11.011962890617724"}),
          h('line', {"x1":"19","y1":"17.999999999998181","x2":"19","y2":"5.999999999998181"}),
          h('line', {"x1":"6.72900390625","y1":"12.988037109367724","x2":"17.27099609375","y2":"19.011962890617724"})
        ]
      );
  }
});

module.exports = NodesTriangle;
module.exports.NodesTriangle = NodesTriangle;
module.exports.default = NodesTriangle;
