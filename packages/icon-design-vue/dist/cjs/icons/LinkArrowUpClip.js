'use strict';

const { defineComponent, h } = require('vue');

const LinkArrowUpClip = defineComponent({
  name: 'LinkArrowUpClip',
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
          h('path', {"d":"M16 16L8 8"}),
          h('path', {"d":"M13 6L10.5 3.5C8.566 1.566 5.434 1.566 3.5 3.5C1.566 5.434 1.566 8.566 3.5 10.5L6 13"}),
          h('path', {"d":"M11 18L13.5 20.5C15.434 22.434 18.566 22.434 20.5 20.5C22.434 18.566 22.434 15.434 20.5 13.5L18 11"}),
          h('path', {"d":"M22.004 4L20.004 2L18.004 4"}),
          h('path', {"d":"M20.004 7L20.004 2"})
        ]
      );
  }
});

module.exports = LinkArrowUpClip;
module.exports.LinkArrowUpClip = LinkArrowUpClip;
module.exports.default = LinkArrowUpClip;
