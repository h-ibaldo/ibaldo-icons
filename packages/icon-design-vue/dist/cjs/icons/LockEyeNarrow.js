'use strict';

const { defineComponent, h } = require('vue');

const LockEyeNarrow = defineComponent({
  name: 'LockEyeNarrow',
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
          h('rect', {"x":"4.999999990599463","y":"10.000000005169568","width":"14","height":"12","rx":"1","ry":"1"}),
          h('circle', {"cx":"11.999999990599463","cy":"16.000000005168658","r":"2.999999999999545"}),
          h('path', {"d":"M16.999999990599463,10.000000005169568v-3.000005000001693c0-2.761420987728343-2.238574012269964-4.999994999998307-4.999994999999217-4.999994999998307h-.000010000000657c-2.761420987729252,0-4.999995000000126,2.238574012269964-4.999995000000126,4.999994999998307v3.000005000001693"}),
          h('polyline', {"points":"12.999999990599463 13.183715825482068 12.999999990599463 15.000000005169568 14.816284170299696 15.000000005169568"})
        ]
      );
  }
});

module.exports = LockEyeNarrow;
module.exports.LockEyeNarrow = LockEyeNarrow;
module.exports.default = LockEyeNarrow;
