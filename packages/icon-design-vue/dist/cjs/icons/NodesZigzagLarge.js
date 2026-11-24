'use strict';

const { defineComponent, h } = require('vue');

const NodesZigzagLarge = defineComponent({
  name: 'NodesZigzagLarge',
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
          h('circle', {"cx":"5","cy":"9.999999999998181","r":"3"}),
          h('circle', {"cx":"13","cy":"18.999999999998181","r":"3"}),
          h('circle', {"cx":"19","cy":"4.999999999998181","r":"3"}),
          h('line', {"x1":"14.181396484380457","y1":"16.243164062498181","x2":"17.818603515630457","y2":"7.756835937498181"}),
          h('line', {"x1":"6.9853515625","y1":"12.233520507808862","x2":"11.0146484375","y2":"16.766479492188409"})
        ]
      );
  }
});

module.exports = NodesZigzagLarge;
module.exports.NodesZigzagLarge = NodesZigzagLarge;
module.exports.default = NodesZigzagLarge;
