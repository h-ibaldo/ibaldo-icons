'use strict';

const { defineComponent, h } = require('vue');

const AlertSquareStack = defineComponent({
  name: 'AlertSquareStack',
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
          h('rect', {"x":"2.000000005000402","y":"2.000000003886271","width":"16","height":"16","rx":"3","ry":"3"}),
          h('path', {"d":"M22.000000005000402,9.000000003886271v10c0,1.656854249493335-1.343145750510303,3-3,3h-10"}),
          h('line', {"x1":"10.000000005000402","y1":"13.010000003887399","x2":"10.000000005000402","y2":"13.000000003886271"}),
          h('line', {"x1":"10.000000005000402","y1":"7.000000003886271","x2":"10.000000005000402","y2":"10.000000003886271"})
        ]
      );
  }
});

module.exports = AlertSquareStack;
module.exports.AlertSquareStack = AlertSquareStack;
module.exports.default = AlertSquareStack;
