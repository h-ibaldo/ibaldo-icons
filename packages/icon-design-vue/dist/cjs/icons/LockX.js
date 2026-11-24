'use strict';

const { defineComponent, h } = require('vue');

const LockX = defineComponent({
  name: 'LockX',
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
          h('rect', {"x":"4.025268564681028","y":"10.000000000709406","width":"16","height":"12","rx":"1","ry":"1"}),
          h('path', {"d":"M17.025268564681028,10.000000000709406v-3.000005000001693c0-2.761420987728343-2.238574012269964-4.999994999998307-4.999995000001945-4.999994999998307h-.000009999999747c-2.761420987728343,0-4.999994999998307,2.238574012269964-4.999994999998307,4.999994999998307v3.000005000001693"}),
          h('line', {"x1":"10.025268564819271","y1":"18.000000000709406","x2":"14.025268564539147","y2":"13.999999995863618"}),
          h('line', {"x1":"10.025268564681028","y1":"13.999999996038241","x2":"14.025268564681028","y2":"18.000000000527507"})
        ]
      );
  }
});

module.exports = LockX;
module.exports.LockX = LockX;
module.exports.default = LockX;
