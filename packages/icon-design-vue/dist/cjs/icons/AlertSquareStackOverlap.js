'use strict';

const { defineComponent, h } = require('vue');

const AlertSquareStackOverlap = defineComponent({
  name: 'AlertSquareStackOverlap',
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
          h('rect', {"x":"3.000000005000402","y":"2.000000003886271","width":"14","height":"16","rx":"2","ry":"2"}),
          h('line', {"x1":"10.000000005000402","y1":"13.010000003887399","x2":"10.000000005000402","y2":"13.000000003886271"}),
          h('line', {"x1":"10.000000005000402","y1":"7.000000003886271","x2":"10.000000005000402","y2":"10.000000003886271"}),
          h('path', {"d":"M7.000000005000402,18.000000003886271v2c0,1.104569499664649.895430500338989,2,2,2h10c1.104569499659192,0,2-.895430500335351,2-2v-12c0-1.104569499663739-.895430500340808-2-2-2h-2"})
        ]
      );
  }
});

module.exports = AlertSquareStackOverlap;
module.exports.AlertSquareStackOverlap = AlertSquareStackOverlap;
module.exports.default = AlertSquareStackOverlap;
