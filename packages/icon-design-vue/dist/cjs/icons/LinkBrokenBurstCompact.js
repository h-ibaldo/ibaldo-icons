'use strict';

const { defineComponent, h } = require('vue');

const LinkBrokenBurstCompact = defineComponent({
  name: 'LinkBrokenBurstCompact',
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
          h('path', {"d":"M4 9L2 9"}),
          h('path', {"d":"M5.465 5.465L4.051 4.051"}),
          h('path', {"d":"M9 4L9 2"}),
          h('path', {"d":"M20 15L22 15"}),
          h('path', {"d":"M18.535 18.535L19.949 19.949"}),
          h('path', {"d":"M15 20L15 22"}),
          h('path', {"d":"M8 16L16 8"}),
          h('path', {"d":"M13 17L11.004 19.02C9.344 20.676 6.656 20.676 4.996 19.02C3.34 17.359 3.34 14.676 4.992 13.02L7 10.98"}),
          h('path', {"d":"M11 7L12.996 4.98C14.656 3.324 17.344 3.324 19.004 4.98C20.66 6.641 20.66 9.324 19.008 10.98L17 13.02"})
        ]
      );
  }
});

module.exports = LinkBrokenBurstCompact;
module.exports.LinkBrokenBurstCompact = LinkBrokenBurstCompact;
module.exports.default = LinkBrokenBurstCompact;
