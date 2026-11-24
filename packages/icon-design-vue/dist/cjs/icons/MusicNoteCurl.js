'use strict';

const { defineComponent, h } = require('vue');

const MusicNoteCurl = defineComponent({
  name: 'MusicNoteCurl',
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
          h('ellipse', {"cx":"8","cy":"18.499999499998012","rx":"4","ry":"3.500000500000169"}),
          h('path', {"d":"M21,11.999998999997842v-1.000002998709533c0-2.209137342500981-1.790859657388864-3.999997000149961-3.999996999889845-3.999997000470103h-.000009000001228c-2.761420435617765-.000000000389264-4.999994000108927-2.238573565038678-4.999994000108927-4.999994000820152v-.000004999999874,16.5"})
        ]
      );
  }
});

module.exports = MusicNoteCurl;
module.exports.MusicNoteCurl = MusicNoteCurl;
module.exports.default = MusicNoteCurl;
