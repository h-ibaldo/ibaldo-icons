'use strict';

const { defineComponent, h } = require('vue');

const IdCardClip = defineComponent({
  name: 'IdCardClip',
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
          h('path', {"d":"M5 19C5 17.344 6.344 16 8 16L9 16C10.656 16 12 17.344 12 19"}),
          h('path', {"d":"M6 13.5C6 12.121 7.121 11 8.5 11C9.879 11 11 12.121 11 13.5C11 14.879 9.879 16 8.5 16C7.121 16 6 14.879 6 13.5Z"}),
          h('path', {"d":"M15 12L18 12"}),
          h('path', {"d":"M15 15L18 15"}),
          h('path', {"d":"M15 18L18 18"}),
          h('path', {"d":"M13 5L20 5C21.105 5 22 5.895 22 7L22 20C22 21.105 21.105 22 20 22L4 22C2.895 22 2 21.105 2 20L2 7C2 5.895 2.895 5 4 5L9.5 5"}),
          h('path', {"d":"M10 8L14 8"}),
          h('path', {"d":"M7.004 1.996L12 8"}),
          h('path', {"d":"M14 5L17 2"})
        ]
      );
  }
});

module.exports = IdCardClip;
module.exports.IdCardClip = IdCardClip;
module.exports.default = IdCardClip;
