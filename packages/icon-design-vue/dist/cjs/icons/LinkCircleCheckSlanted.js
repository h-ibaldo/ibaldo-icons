'use strict';

const { defineComponent, h } = require('vue');

const LinkCircleCheckSlanted = defineComponent({
  name: 'LinkCircleCheckSlanted',
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
          h('path', {"d":"M16.5 11.5C17.605 10.395 17.605 8.605 16.5 7.5C15.395 6.395 13.605 6.395 12.5 7.5L10.828 9.172C9.723 10.277 9.723 12.066 10.828 13.172"}),
          h('path', {"d":"M7.5 12.5C6.395 13.605 6.395 15.395 7.5 16.5C8.605 17.605 10.395 17.605 11.5 16.5L13.172 14.828C14.277 13.723 14.277 11.934 13.172 10.828"}),
          h('path', {"d":"M21.797 14C21.93 13.355 22 12.688 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C12.684 22 13.355 21.93 14 21.801"}),
          h('path', {"d":"M17 19L19 21L22 18"})
        ]
      );
  }
});

module.exports = LinkCircleCheckSlanted;
module.exports.LinkCircleCheckSlanted = LinkCircleCheckSlanted;
module.exports.default = LinkCircleCheckSlanted;
