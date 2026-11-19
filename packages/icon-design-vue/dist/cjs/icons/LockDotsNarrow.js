'use strict';

const { defineComponent, h } = require('vue');

const LockDotsNarrow = defineComponent({
  name: 'LockDotsNarrow',
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
          h('rect', {"x":"4.949462885144385","y":"10.000000000480213","width":"14","height":"12","rx":"1","ry":"1"}),
          h('path', {"d":"M16.949462885144385,10.000000000480213v-3.000005000001693c0-2.761420987728343-2.238574012269964-4.999994999998307-4.999994999999217-4.999994999998307h-.000010000001566c-2.761420987731981,0-4.999994999999217,2.238574012269964-4.999994999999217,4.999994999998307v3.000005000001693"}),
          h('line', {"x1":"8.949462885142566","y1":"15.990000000479995","x2":"8.949462885142566","y2":"16.000000000480213"}),
          h('line', {"x1":"11.949462885142566","y1":"15.990000000479995","x2":"11.949462885142566","y2":"16.000000000480213"}),
          h('line', {"x1":"14.949462885142566","y1":"15.990000000479995","x2":"14.949462885142566","y2":"16.000000000480213"})
        ]
      );
  }
});

module.exports = LockDotsNarrow;
module.exports.LockDotsNarrow = LockDotsNarrow;
module.exports.default = LockDotsNarrow;
