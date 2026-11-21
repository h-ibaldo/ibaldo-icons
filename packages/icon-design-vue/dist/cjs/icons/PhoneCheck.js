'use strict';

const { defineComponent, h } = require('vue');

const PhoneCheck = defineComponent({
  name: 'PhoneCheck',
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
          h('path', {"d":"M7.945 17.867L6.043 15.965C4.301 14.223 2.988 12.098 2.207 9.762C1.656 8.098 1.855 6.277 2.758 4.777L3.84 2.973C4.199 2.367 4.852 2 5.555 2L6.438 2C7.105 2 7.73 2.336 8.102 2.891L10.367 6.285C11.031 7.289 10.672 8.648 9.598 9.184L7.508 10.23L8.074 11.363C9.043 13.297 10.613 14.867 12.547 15.836L13.68 16.402L14.723 14.313C15.262 13.238 16.621 12.875 17.621 13.543L21.02 15.809C21.574 16.18 21.91 16.801 21.91 17.473L21.91 18.355C21.91 19.059 21.539 19.707 20.938 20.07L19.133 21.152C17.629 22.055 15.809 22.254 14.148 21.699C11.809 20.922 9.688 19.609 7.945 17.867Z"}),
          h('path', {"d":"M14 5L17 8L22 3"})
        ]
      );
  }
});

module.exports = PhoneCheck;
module.exports.PhoneCheck = PhoneCheck;
module.exports.default = PhoneCheck;
