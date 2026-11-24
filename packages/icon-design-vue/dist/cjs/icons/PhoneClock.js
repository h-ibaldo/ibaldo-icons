'use strict';

const { defineComponent, h } = require('vue');

const PhoneClock = defineComponent({
  name: 'PhoneClock',
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
          h('path', {"d":"M12 7C12 9.762 14.238 12 17 12C19.762 12 22 9.762 22 7C22 4.238 19.762 2 17 2C14.238 2 12 4.238 12 7Z"}),
          h('path', {"d":"M17 5L17 7L19 7"}),
          h('path', {"d":"M7.348 18.781L5.145 16.578C3.855 15.289 2.883 13.719 2.309 11.988C1.754 10.328 1.953 8.508 2.855 7.004L3.477 5.973C3.836 5.367 4.488 5 5.191 5L5.609 5C6.281 5 6.906 5.336 7.273 5.891L8.922 8.359C9.59 9.363 9.23 10.723 8.152 11.258L6.68 11.996L6.941 12.512C7.906 14.445 9.477 16.016 11.41 16.984L11.93 17.242L12.664 15.77C13.203 14.695 14.563 14.332 15.563 15L18.031 16.648C18.59 17.02 18.922 17.645 18.922 18.313L18.922 18.73C18.922 19.434 18.555 20.086 17.953 20.449L16.918 21.066C15.414 21.969 13.594 22.168 11.934 21.617C10.203 21.039 8.633 20.07 7.348 18.781Z"})
        ]
      );
  }
});

module.exports = PhoneClock;
module.exports.PhoneClock = PhoneClock;
module.exports.default = PhoneClock;
