'use strict';

const { defineComponent, h } = require('vue');

const XCircle = defineComponent({
  name: 'XCircle',
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
          h('circle', {"cx":"11.999999990790457","cy":"12.000000000897671","r":"10"}),
          h('line', {"x1":"8.999999990919605","y1":"15.000000000763976","x2":"14.999999990650394","y2":"9.000000001032276"}),
          h('line', {"x1":"14.999999990519427","y1":"15.000000000894943","x2":"8.999999991059667","y2":"9.000000000897671"})
        ]
      );
  }
});

module.exports = XCircle;
module.exports.XCircle = XCircle;
module.exports.default = XCircle;
