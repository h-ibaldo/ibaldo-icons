'use strict';

const { defineComponent, h } = require('vue');

const MusicNoteHook = defineComponent({
  name: 'MusicNoteHook',
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
          h('ellipse', {"cx":"8","cy":"18.499999999998181","rx":"4","ry":"3.5"}),
          h('path', {"d":"M20,6.999999999998181v-.000004999999874c0-2.761420986889789-2.238574012269964-4.999995000000126-4.999995000000126-4.999995000000126h-3.000004999999874v16"})
        ]
      );
  }
});

module.exports = MusicNoteHook;
module.exports.MusicNoteHook = MusicNoteHook;
module.exports.default = MusicNoteHook;
