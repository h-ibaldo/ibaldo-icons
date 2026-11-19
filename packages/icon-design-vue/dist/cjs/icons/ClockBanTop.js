'use strict';

const { defineComponent, h } = require('vue');

const ClockBanTop = defineComponent({
  name: 'ClockBanTop',
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
          h('path', {"d":"M10 9.555L10 14L13.555 16.668"}),
          h('path', {"d":"M22 6.5C22 4.016 19.984 2 17.5 2C15.016 2 13 4.016 13 6.5C13 8.984 15.016 11 17.5 11C19.984 11 22 8.984 22 6.5Z"}),
          h('path', {"d":"M20.68 3.316L14.32 9.684"}),
          h('path', {"d":"M13.008 6.59C12.078 6.211 11.066 6 10 6C5.582 6 2 9.582 2 14C2 18.418 5.582 22 10 22C14.418 22 18 18.418 18 14C18 12.934 17.785 11.922 17.41 10.992"})
        ]
      );
  }
});

module.exports = ClockBanTop;
module.exports.ClockBanTop = ClockBanTop;
module.exports.default = ClockBanTop;
