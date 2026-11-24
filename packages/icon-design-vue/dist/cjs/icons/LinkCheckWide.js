'use strict';

const { defineComponent, h } = require('vue');

const LinkCheckWide = defineComponent({
  name: 'LinkCheckWide',
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
          h('path', {"d":"M11.5 19.5L10.5 20.5C8.566 22.434 5.434 22.434 3.5 20.5C1.566 18.566 1.566 15.434 3.5 13.5L7.5 9.5C9.434 7.566 12.566 7.566 14.5 9.5C14.852 9.852 15.113 10.246 15.336 10.66"}),
          h('path', {"d":"M12.5 4.5L13.5 3.5C15.434 1.566 18.566 1.566 20.5 3.5C22.434 5.434 22.434 8.566 20.5 10.5L16.5 14.5C14.566 16.434 11.434 16.434 9.5 14.5C9.148 14.148 8.887 13.754 8.664 13.336"}),
          h('path', {"d":"M16 20L18 22L22 18"})
        ]
      );
  }
});

module.exports = LinkCheckWide;
module.exports.LinkCheckWide = LinkCheckWide;
module.exports.default = LinkCheckWide;
