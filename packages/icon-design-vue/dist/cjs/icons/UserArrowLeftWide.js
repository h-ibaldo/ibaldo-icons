'use strict';

const { defineComponent, h } = require('vue');

const UserArrowLeftWide = defineComponent({
  name: 'UserArrowLeftWide',
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
          h('path', {"d":"M21 19L14 19"}),
          h('path', {"d":"M17 16L14 19L17 22"}),
          h('path', {"d":"M6 6C6 3.789 7.789 2 10 2C12.211 2 14 3.789 14 6C14 8.211 12.211 10 10 10C7.789 10 6 8.211 6 6Z"}),
          h('path', {"d":"M3 22L3 17C3 13.133 6.133 10 10 10"}),
          h('path', {"d":"M15.293 12.418C14.008 10.938 12.113 10 10 10"})
        ]
      );
  }
});

module.exports = UserArrowLeftWide;
module.exports.UserArrowLeftWide = UserArrowLeftWide;
module.exports.default = UserArrowLeftWide;
