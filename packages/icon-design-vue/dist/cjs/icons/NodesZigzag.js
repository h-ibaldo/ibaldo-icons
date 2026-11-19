'use strict';

const { defineComponent, h } = require('vue');

const NodesZigzag = defineComponent({
  name: 'NodesZigzag',
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
          h('circle', {"cx":"4","cy":"9.999999999998181","r":"2"}),
          h('circle', {"cx":"14","cy":"18.999999999998181","r":"2"}),
          h('circle', {"cx":"20","cy":"4.999999999998181","r":"2"}),
          h('line', {"x1":"14.78759765625","y1":"17.162109374998181","x2":"19.21240234375","y2":"6.837890624998181"}),
          h('line', {"x1":"5.481201171880457","y1":"11.333007812498181","x2":"12.518798828130457","y2":"17.666992187498181"})
        ]
      );
  }
});

module.exports = NodesZigzag;
module.exports.NodesZigzag = NodesZigzag;
module.exports.default = NodesZigzag;
