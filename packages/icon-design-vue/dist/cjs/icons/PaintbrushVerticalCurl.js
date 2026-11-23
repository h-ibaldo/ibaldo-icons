'use strict';

const { defineComponent, h } = require('vue');

const PaintbrushVerticalCurl = defineComponent({
  name: 'PaintbrushVerticalCurl',
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
          h('path', {"d":"M5 11L19 11L19 6.051C19 4.691 18.445 3.391 17.465 2.445L17 2L3 2L3.535 2.535C4.473 3.473 5 4.746 5 6.07Z"}),
          h('path', {"d":"M4 13L4 11L20 11L20 13C20 14.105 19.105 15 18 15L14 15L14 20C14 21.105 13.105 22 12 22C10.895 22 10 21.105 10 20L10 15L6 15C4.895 15 4 14.105 4 13Z"}),
          h('path', {"d":"M5 6L19 8"})
        ]
      );
  }
});

module.exports = PaintbrushVerticalCurl;
module.exports.PaintbrushVerticalCurl = PaintbrushVerticalCurl;
module.exports.default = PaintbrushVerticalCurl;
