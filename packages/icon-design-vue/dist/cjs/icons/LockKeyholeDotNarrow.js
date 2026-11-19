'use strict';

const { defineComponent, h } = require('vue');

const LockKeyholeDotNarrow = defineComponent({
  name: 'LockKeyholeDotNarrow',
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
          h('circle', {"cx":"11.949462885139837","cy":"16.000000000480213","r":"1"}),
          h('rect', {"x":"4.949462885139837","y":"10.000000000480213","width":"14","height":"12","rx":"1","ry":"1"}),
          h('path', {"d":"M16.949462885139837,10.000000000480213v-3.000005000001693c0-2.761420987728343-2.238574012269964-4.999994999998307-4.999995000000126-4.999994999998307h-.000009999999747c-2.761420987730162,0-4.999995000000126,2.238574012269964-4.999995000000126,4.999994999998307v3.000005000001693"})
        ]
      );
  }
});

module.exports = LockKeyholeDotNarrow;
module.exports.LockKeyholeDotNarrow = LockKeyholeDotNarrow;
module.exports.default = LockKeyholeDotNarrow;
