'use strict';

const { defineComponent, h } = require('vue');

const EjectDownSquare = defineComponent({
  name: 'EjectDownSquare',
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
          h('path', {"d":"M7 7L17 7"}),
          h('path', {"d":"M8.164 10.945L15.836 10.945C16.688 10.945 17.152 11.941 16.598 12.59L12.762 17.105C12.363 17.574 11.637 17.574 11.238 17.105L7.402 12.59C6.848 11.941 7.309 10.945 8.164 10.945Z"}),
          h('path', {"d":"M22 5L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5Z"})
        ]
      );
  }
});

module.exports = EjectDownSquare;
module.exports.EjectDownSquare = EjectDownSquare;
module.exports.default = EjectDownSquare;
