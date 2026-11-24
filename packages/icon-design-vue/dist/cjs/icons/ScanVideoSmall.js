'use strict';

const { defineComponent, h } = require('vue');

const ScanVideoSmall = defineComponent({
  name: 'ScanVideoSmall',
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
          h('path', {"d":"M2 7L2 5C2 3.344 3.344 2 5 2L7 2"}),
          h('path', {"d":"M22 7L22 5C22 3.344 20.656 2 19 2L17 2"}),
          h('path', {"d":"M2 17L2 19C2 20.656 3.344 22 5 22L7 22"}),
          h('path', {"d":"M22 17L22 19C22 20.656 20.656 22 19 22L17 22"}),
          h('path', {"d":"M12 15L8 15C7.449 15 7 14.551 7 14L7 10C7 9.449 7.449 9 8 9L12 9C12.551 9 13 9.449 13 10L13 14C13 14.551 12.551 15 12 15Z"}),
          h('path', {"d":"M13 11L16 9L17 9L17 15L16 15L13 13"})
        ]
      );
  }
});

module.exports = ScanVideoSmall;
module.exports.ScanVideoSmall = ScanVideoSmall;
module.exports.default = ScanVideoSmall;
