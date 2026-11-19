'use strict';

const { defineComponent, h } = require('vue');

const PointerSettingsStraight = defineComponent({
  name: 'PointerSettingsStraight',
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
          h('path', {"d":"M2 6.547L2 20.738C2 21.609 3.031 22.063 3.672 21.48L7.5 18L12.707 18C13.578 18 14.035 16.957 13.438 16.32L3.73 5.867C3.113 5.199 2 5.637 2 6.547Z"}),
          h('path', {"d":"M20.5 7C20.5 8.934 18.934 10.5 17 10.5C15.066 10.5 13.5 8.934 13.5 7C13.5 5.066 15.066 3.5 17 3.5C18.934 3.5 20.5 5.066 20.5 7Z"}),
          h('path', {"d":"M17 7L17 7"}),
          h('path', {"d":"M17 2L17 3.5"}),
          h('path', {"d":"M17 10.5L17 12"}),
          h('path', {"d":"M22 7L20.5 7"}),
          h('path', {"d":"M13.5 7L12 7"}),
          h('path', {"d":"M20.535 10.535L19.473 9.473"}),
          h('path', {"d":"M14.527 4.527L13.465 3.465"}),
          h('path', {"d":"M13.465 10.535L14.527 9.473"}),
          h('path', {"d":"M19.473 4.527L20.535 3.465"})
        ]
      );
  }
});

module.exports = PointerSettingsStraight;
module.exports.PointerSettingsStraight = PointerSettingsStraight;
module.exports.default = PointerSettingsStraight;
