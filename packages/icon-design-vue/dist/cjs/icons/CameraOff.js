'use strict';

const { defineComponent, h } = require('vue');

const CameraOff = defineComponent({
  name: 'CameraOff',
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
          h('path', {"d":"M4 20C2.895 20 2 19.105 2 18L2 9C2 7.895 2.895 7 4 7L7 7L9 3L15 3L17 7"}),
          h('path', {"d":"M21.691 7.93C21.887 8.238 22 8.605 22 9L22 18C22 19.105 21.105 20 20 20L8.801 20"}),
          h('path', {"d":"M22 2L2 22"}),
          h('path', {"d":"M8.578 15.422C7.906 14.637 7.5 13.617 7.5 12.5C7.5 10.016 9.516 8 12 8C13.117 8 14.137 8.406 14.922 9.078"}),
          h('path', {"d":"M16.406 11.59C16.469 11.887 16.5 12.188 16.5 12.5C16.5 14.984 14.484 17 12 17C11.688 17 11.387 16.969 11.094 16.91"})
        ]
      );
  }
});

module.exports = CameraOff;
module.exports.CameraOff = CameraOff;
module.exports.default = CameraOff;
