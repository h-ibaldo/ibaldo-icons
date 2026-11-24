'use strict';

const { defineComponent, h } = require('vue');

const ClosedCaption = defineComponent({
  name: 'ClosedCaption',
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
          h('path', {"d":"M19 20L5 20C3.344 20 2 18.656 2 17L2 7C2 5.344 3.344 4 5 4L19 4C20.656 4 22 5.344 22 7L22 17C22 18.656 20.656 20 19 20Z"}),
          h('path', {"d":"M10.5 9.797C9.969 9.313 9.277 9 8.5 9C6.844 9 5.5 10.344 5.5 12C5.5 13.656 6.844 15 8.5 15C9.277 15 9.969 14.688 10.5 14.199"}),
          h('path', {"d":"M18.5 9.797C17.969 9.313 17.277 9 16.5 9C14.844 9 13.5 10.344 13.5 12C13.5 13.656 14.844 15 16.5 15C17.277 15 17.969 14.688 18.5 14.199"})
        ]
      );
  }
});

module.exports = ClosedCaption;
module.exports.ClosedCaption = ClosedCaption;
module.exports.default = ClosedCaption;
