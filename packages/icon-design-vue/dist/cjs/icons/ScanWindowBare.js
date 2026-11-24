'use strict';

const { defineComponent, h } = require('vue');

const ScanWindowBare = defineComponent({
  name: 'ScanWindowBare',
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
          h('path', {"d":"M16 18L8 18C6.895 18 6 17.105 6 16L6 8C6 6.895 6.895 6 8 6L16 6C17.105 6 18 6.895 18 8L18 16C18 17.105 17.105 18 16 18Z"}),
          h('path', {"d":"M9 9L9 9"}),
          h('path', {"d":"M12 9L12 9"}),
          h('path', {"d":"M2 7L2 5C2 3.344 3.344 2 5 2L7 2"}),
          h('path', {"d":"M22 7L22 5C22 3.344 20.656 2 19 2L17 2"}),
          h('path', {"d":"M2 17L2 19C2 20.656 3.344 22 5 22L7 22"}),
          h('path', {"d":"M22 17L22 19C22 20.656 20.656 22 19 22L17 22"})
        ]
      );
  }
});

module.exports = ScanWindowBare;
module.exports.ScanWindowBare = ScanWindowBare;
module.exports.default = ScanWindowBare;
