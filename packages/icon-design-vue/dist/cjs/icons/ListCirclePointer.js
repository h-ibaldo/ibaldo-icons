'use strict';

const { defineComponent, h } = require('vue');

const ListCirclePointer = defineComponent({
  name: 'ListCirclePointer',
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
          h('path', {"d":"M8 8L16 8"}),
          h('path', {"d":"M8 11L16 11"}),
          h('path', {"d":"M8 14L11 14"}),
          h('path', {"d":"M14.52 15.152L16.688 21.66C16.824 22.063 17.371 22.125 17.59 21.758L19.152 19.156L21.758 17.59C22.125 17.371 22.063 16.824 21.66 16.688L15.152 14.52C14.762 14.391 14.391 14.762 14.52 15.152Z"}),
          h('path', {"d":"M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22"})
        ]
      );
  }
});

module.exports = ListCirclePointer;
module.exports.ListCirclePointer = ListCirclePointer;
module.exports.default = ListCirclePointer;
