'use strict';

const { defineComponent, h } = require('vue');

const PhoneArrowBendUp = defineComponent({
  name: 'PhoneArrowBendUp',
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
          h('path', {"d":"M7.84 18.172L5.836 16.172C4.246 14.582 3.047 12.641 2.336 10.512C1.781 8.848 1.98 7.027 2.883 5.527L3.813 3.98C4.172 3.375 4.824 3.008 5.527 3.008L6.254 3.008C6.922 3.008 7.547 3.344 7.918 3.898L9.977 6.984C10.641 7.984 10.281 9.344 9.207 9.883L7.324 10.824L7.789 11.75C8.754 13.684 10.324 15.254 12.258 16.219L13.184 16.684L14.125 14.801C14.664 13.727 16.023 13.367 17.023 14.031L20.109 16.09C20.664 16.461 21 17.086 21 17.754L21 18.48C21 19.184 20.633 19.836 20.027 20.195L18.48 21.125C16.98 22.027 15.16 22.227 13.496 21.672C11.367 20.961 9.426 19.762 7.84 18.172Z"}),
          h('path', {"d":"M13 5L16 2L19 5"}),
          h('path', {"d":"M16 2L16 10L22 10"})
        ]
      );
  }
});

module.exports = PhoneArrowBendUp;
module.exports.PhoneArrowBendUp = PhoneArrowBendUp;
module.exports.default = PhoneArrowBendUp;
