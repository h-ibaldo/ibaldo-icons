'use strict';

const { defineComponent, h } = require('vue');

const UserPlus = defineComponent({
  name: 'UserPlus',
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
          h('path', {"d":"M8 6C8 3.789 9.789 2 12 2C14.211 2 16 3.789 16 6C16 8.211 14.211 10 12 10C9.789 10 8 8.211 8 6Z"}),
          h('path', {"d":"M4 22L4 19C4 15.688 6.688 13 10 13L14 13C14.766 13 15.5 13.145 16.176 13.406"}),
          h('path', {"d":"M18 16L18 22"}),
          h('path', {"d":"M21 19L15 19"})
        ]
      );
  }
});

module.exports = UserPlus;
module.exports.UserPlus = UserPlus;
module.exports.default = UserPlus;
