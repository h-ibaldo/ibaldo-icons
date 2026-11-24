'use strict';

const { defineComponent, h } = require('vue');

const LinkCircleXShort = defineComponent({
  name: 'LinkCircleXShort',
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
          h('path', {"d":"M22 22L18 18"}),
          h('path', {"d":"M22 18L18 22"}),
          h('path', {"d":"M21.801 14C21.93 13.355 22 12.688 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C12.684 22 13.352 21.93 14 21.801"}),
          h('path', {"d":"M15.172 12.828C16.277 11.723 16.277 9.934 15.172 8.828C14.066 7.723 12.277 7.723 11.172 8.828"}),
          h('path', {"d":"M8.828 11.172C7.723 12.277 7.723 14.066 8.828 15.172C9.934 16.277 11.723 16.277 12.828 15.172"}),
          h('path', {"d":"M11.328 12.672L12.672 11.328"})
        ]
      );
  }
});

module.exports = LinkCircleXShort;
module.exports.LinkCircleXShort = LinkCircleXShort;
module.exports.default = LinkCircleXShort;
