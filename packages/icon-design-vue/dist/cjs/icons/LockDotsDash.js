'use strict';

const { defineComponent, h } = require('vue');

const LockDotsDash = defineComponent({
  name: 'LockDotsDash',
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
          h('rect', {"x":"3.949462885142566","y":"10.000000000480213","width":"16","height":"12","rx":"1","ry":"1"}),
          h('path', {"d":"M16.949462885142566,10.000000000480213v-3.000005000001693c0-2.761420987728343-2.238574012271783-4.999994999998307-4.999995000000126-4.999994999998307h-.000010000000657c-2.761420987730162,0-4.999994999999217,2.238574012269964-4.999994999999217,4.999994999998307v3.000005000001693"}),
          h('line', {"x1":"9.949462885142566","y1":"18.000000000480213","x2":"7.949462885142566","y2":"18.000000000480213"}),
          h('line', {"x1":"12.949462885142566","y1":"15.990000000479995","x2":"12.949462885142566","y2":"16.000000000480213"}),
          h('line', {"x1":"15.949462885142566","y1":"15.990000000479995","x2":"15.949462885142566","y2":"16.000000000480213"})
        ]
      );
  }
});

module.exports = LockDotsDash;
module.exports.LockDotsDash = LockDotsDash;
module.exports.default = LockDotsDash;
