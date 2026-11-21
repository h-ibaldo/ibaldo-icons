'use strict';

const { defineComponent, h } = require('vue');

const PhoneMusicSharp = defineComponent({
  name: 'PhoneMusicSharp',
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
          h('path', {"d":"M6.355 10.297L6.391 10.398C7.559 13.742 10.199 16.359 13.551 17.492"}),
          h('path', {"d":"M13.637 14.793L15.352 13.895L19.848 16.594L19.191 19.887C19.039 20.648 18.543 21.293 17.852 21.641C17.395 21.867 16.879 21.953 16.375 21.879L14.906 21.668C12.254 21.289 9.75 20.207 7.656 18.535C6.793 17.844 6.008 17.055 5.316 16.191C3.641 14.098 2.559 11.598 2.18 8.941L1.969 7.477C1.898 6.969 1.98 6.453 2.207 5.996C2.555 5.305 3.203 4.813 3.961 4.66L7.254 4L9.953 8.496L9.141 9.398"}),
          h('path', {"d":"M16 8L15 8C14.449 8 14 8.449 14 9C14 9.551 14.449 10 15 10C15.551 10 16 9.551 16 9L16 3L22 2L22 8C22 8.551 21.551 9 21 9C20.449 9 20 8.551 20 8C20 7.449 20.449 7 21 7L22 7"})
        ]
      );
  }
});

module.exports = PhoneMusicSharp;
module.exports.PhoneMusicSharp = PhoneMusicSharp;
module.exports.default = PhoneMusicSharp;
