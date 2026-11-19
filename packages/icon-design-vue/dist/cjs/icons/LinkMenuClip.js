'use strict';

const { defineComponent, h } = require('vue');

const LinkMenuClip = defineComponent({
  name: 'LinkMenuClip',
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
          h('path', {"d":"M8 16L16 8"}),
          h('path', {"d":"M11 6L13.5 3.5C15.434 1.566 18.566 1.566 20.5 3.5C22.434 5.434 22.434 8.566 20.5 10.5L18 13"}),
          h('path', {"d":"M13 18L10.5 20.5C8.566 22.434 5.434 22.434 3.5 20.5C1.566 18.566 1.566 15.434 3.5 13.5L6 11"}),
          h('path', {"d":"M2 2L7 2"}),
          h('path', {"d":"M2 5L7 5"}),
          h('path', {"d":"M2 8L4 8"})
        ]
      );
  }
});

module.exports = LinkMenuClip;
module.exports.LinkMenuClip = LinkMenuClip;
module.exports.default = LinkMenuClip;
