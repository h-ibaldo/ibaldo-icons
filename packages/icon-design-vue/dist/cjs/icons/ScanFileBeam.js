'use strict';

const { defineComponent, h } = require('vue');

const ScanFileBeam = defineComponent({
  name: 'ScanFileBeam',
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
          h('path', {"d":"M18 17L18 18C18 18.552 17.552 19 17 19L7 19C6.448 19 6 18.552 6 18L6 17"}),
          h('path', {"d":"M2 19L2 20C2 21.105 2.895 22 4 22L5 22"}),
          h('path', {"d":"M19 22L20 22C21.105 22 22 21.105 22 20L22 19"}),
          h('path', {"d":"M6 14L6 6C6 5.448 6.448 5 7 5L13.586 5C13.851 5 14.105 5.105 14.293 5.293L17.707 8.707C17.895 8.895 18 9.149 18 9.414L18 14"}),
          h('path', {"d":"M13 6L13 10L18 10"}),
          h('path', {"d":"M22 5L22 4C22 2.895 21.105 2 20 2L19 2"}),
          h('path', {"d":"M5 2L4 2C2.895 2 2 2.895 2 4L2 5"}),
          h('path', {"d":"M2 14L22 14"})
        ]
      );
  }
});

module.exports = ScanFileBeam;
module.exports.ScanFileBeam = ScanFileBeam;
module.exports.default = ScanFileBeam;
