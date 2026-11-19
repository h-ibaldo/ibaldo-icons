'use strict';

const { defineComponent, h } = require('vue');

const LinkCircleXWide = defineComponent({
  name: 'LinkCircleXWide',
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
          h('path', {"d":"M16.5 11.5L17.086 10.914C17.867 10.133 17.867 8.867 17.086 8.086L15.914 6.914C15.133 6.133 13.867 6.133 13.086 6.914L10.828 9.172C9.723 10.277 9.723 12.066 10.828 13.172"}),
          h('path', {"d":"M7.5 12.5L6.914 13.086C6.133 13.867 6.133 15.133 6.914 15.914L8.086 17.086C8.867 17.867 10.133 17.867 10.914 17.086L13.172 14.828C14.277 13.723 14.277 11.934 13.172 10.828"})
        ]
      );
  }
});

module.exports = LinkCircleXWide;
module.exports.LinkCircleXWide = LinkCircleXWide;
module.exports.default = LinkCircleXWide;
