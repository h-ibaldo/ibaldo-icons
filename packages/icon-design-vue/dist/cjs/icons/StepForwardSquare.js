'use strict';

const { defineComponent, h } = require('vue');

const StepForwardSquare = defineComponent({
  name: 'StepForwardSquare',
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
          h('path', {"d":"M7 17L7 7"}),
          h('path', {"d":"M10.945 15.836L10.945 8.164C10.945 7.313 11.941 6.848 12.59 7.402L17.105 11.238C17.574 11.637 17.574 12.363 17.105 12.762L12.59 16.598C11.941 17.152 10.945 16.691 10.945 15.836Z"}),
          h('path', {"d":"M5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2Z"})
        ]
      );
  }
});

module.exports = StepForwardSquare;
module.exports.StepForwardSquare = StepForwardSquare;
module.exports.default = StepForwardSquare;
