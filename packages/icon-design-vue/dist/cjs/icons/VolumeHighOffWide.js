'use strict';

const { defineComponent, h } = require('vue');

const VolumeHighOffWide = defineComponent({
  name: 'VolumeHighOffWide',
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
          h('path', {"d":"M3 4L20 21"}),
          h('path', {"d":"M11 8L11 5.414C11 4.523 9.922 4.078 9.293 4.707L8.5 5.5"}),
          h('path', {"d":"M6.5 7.5L5 9L3 9C2.445 9 2 9.445 2 10L2 14C2 14.555 2.445 15 3 15L5 15L9.293 19.293C9.922 19.922 11 19.477 11 18.586L11 12"}),
          h('path', {"d":"M15 12C15 11.266 14.594 10.641 14 10.293"}),
          h('path', {"d":"M17.75 14.75C18.223 13.941 18.5 13.004 18.5 12C18.5 9.848 17.262 7.988 15.457 7.086"}),
          h('path', {"d":"M20.266 17.266C21.348 15.785 22 13.973 22 12C22 8.477 19.969 5.434 17.023 3.957"})
        ]
      );
  }
});

module.exports = VolumeHighOffWide;
module.exports.VolumeHighOffWide = VolumeHighOffWide;
module.exports.default = VolumeHighOffWide;
