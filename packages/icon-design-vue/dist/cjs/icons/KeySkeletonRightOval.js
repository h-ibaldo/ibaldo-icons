'use strict';

const { defineComponent, h } = require('vue');

const KeySkeletonRightOval = defineComponent({
  name: 'KeySkeletonRightOval',
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
          h('line', {"x1":"22.000019575950319","y1":"12.000015258789062","x2":"8.000019575950319","y2":"12.000015258789062"}),
          h('line', {"x1":"20.000019575950319","y1":"16.000015258789062","x2":"20.000019575950319","y2":"12.000015258789062"}),
          h('line', {"x1":"16.000019575950319","y1":"16.000015258789062","x2":"16.000019575950319","y2":"12.000015258789062"}),
          h('rect', {"x":"2.000019606326418","y":"7.000015258789062","width":"5.999999963723212","height":"10","rx":"2.999996979915418","ry":"2.999996979915418"})
        ]
      );
  }
});

module.exports = KeySkeletonRightOval;
module.exports.KeySkeletonRightOval = KeySkeletonRightOval;
module.exports.default = KeySkeletonRightOval;
