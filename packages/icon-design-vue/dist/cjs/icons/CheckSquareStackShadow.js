'use strict';

const { defineComponent, h } = require('vue');

const CheckSquareStackShadow = defineComponent({
  name: 'CheckSquareStackShadow',
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
          h('polyline', {"points":"6.974731440090181 10.000000003874447 8.974731440090181 12.000000003874447 12.974731440090181 8.000000003874447"}),
          h('rect', {"x":"2.974731440090181","y":"3.000000003874447","width":"14","height":"14","rx":"3","ry":"3"}),
          h('path', {"d":"M20.974731440090181,8.000000003874447v10c0,1.656854249493335-1.343145750510303,3-3,3H7.974731440090181"})
        ]
      );
  }
});

module.exports = CheckSquareStackShadow;
module.exports.CheckSquareStackShadow = CheckSquareStackShadow;
module.exports.default = CheckSquareStackShadow;
