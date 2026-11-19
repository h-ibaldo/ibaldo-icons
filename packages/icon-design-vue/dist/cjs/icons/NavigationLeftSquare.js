'use strict';

const { defineComponent, h } = require('vue');

const NavigationLeftSquare = defineComponent({
  name: 'NavigationLeftSquare',
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
          h('path', {"d":"M14.344 6.977L7.531 11.066C6.824 11.488 6.824 12.512 7.531 12.934L14.344 17.023C15.215 17.547 16.262 16.703 15.941 15.746L14.809 12.344C14.734 12.121 14.734 11.879 14.809 11.656L15.941 8.254C16.262 7.293 15.215 6.453 14.344 6.977Z"}),
          h('path', {"d":"M5 22L19 22C20.656 22 22 20.656 22 19L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5L2 19C2 20.656 3.344 22 5 22Z"})
        ]
      );
  }
});

module.exports = NavigationLeftSquare;
module.exports.NavigationLeftSquare = NavigationLeftSquare;
module.exports.default = NavigationLeftSquare;
