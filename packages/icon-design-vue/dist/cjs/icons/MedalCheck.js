'use strict';

const { defineComponent, h } = require('vue');

const MedalCheck = defineComponent({
  name: 'MedalCheck',
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
          h('path', {"d":"M18 9C18 12.313 15.313 15 12 15C8.688 15 6 12.313 6 9C6 5.688 8.688 3 12 3C15.313 3 18 5.688 18 9Z"}),
          h('path', {"d":"M8 13.465L8 21L12 19L16 21L16 13.465"}),
          h('path', {"d":"M10 9L10.691 10.379C10.844 10.684 11.25 10.75 11.492 10.512L14 8"})
        ]
      );
  }
});

module.exports = MedalCheck;
module.exports.MedalCheck = MedalCheck;
module.exports.default = MedalCheck;
